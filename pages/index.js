import Layout from "../components/Layout";
import Badge from "../components/Badge";
import Thumbnail from "../components/Thumbnail";
import { getDatabase } from "../lib/notion";

// blog posts database
export const databaseId = process.env.NOTION_DATABASE;

export default function Home({ posts }) {
  const featured = posts
    .filter((post) => {
      const position = post.properties.Position.number;
      return !!position; // filter out posts without a position
    })
    .map((post) => {
      return {
        id: post.id,
        category: post.properties.Category.rich_text[0].plain_text,
        position: post.properties.Position.number,
        imageURL: post.properties.Thumbnail.files[0].file.url,
        title: post.properties.Title.title[0].plain_text,
      };
    })
    .sort((post) => post.position)
    .reverse();

  return (
    <Layout title="Inspiration, Creativity, Design">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mt-12">
          <h1 className="text-5xl tracking-tight font-bold">Featured posts</h1>
          <div className="flex items-center">
            <p className="font-bold">Sort by</p>
            <Badge text="LATEST FIRST" classNames="tracking-widest" />
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 mt-9 gap-8 h-[625px]">
          <Thumbnail {...featured[0]} variant="extended" />
          <Thumbnail {...featured[1]} />
          <Thumbnail {...featured[2]} />
          <Thumbnail {...featured[3]} />
          <Thumbnail {...featured[4]} />
        </div>
        <div className="flex justify-center items-center space-x-3 my-14">
          <p className="mt-[3px] font-medium text-gray-500">Scroll Down</p>
          <div className="flex justify-center items-center bg-blue-700 bg-opacity-20 dark:bg-opacity-30 w-7 h-7 rounded-full">
            <img src="/icons/arrow-down.svg" alt="Down Arrow Icon" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
