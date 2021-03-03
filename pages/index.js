import Head from "next/head";
import Article from "../components/Article";

//sample data source
import data from "../data/dummy";

export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div className="my-4 px-4">
      <Head>
        <title>Windphace - Creativity, Inspiration, Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-7xl flex flex-wrap items-start">
        {data.map((article) => (
          <Article {...article} key={article.id} />
        ))}
      </div>
    </div>
  );
}
