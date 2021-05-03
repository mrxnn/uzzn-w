import Layout from "../components/Layout";
import Badge from "../components/Badge";
import Thumbnail from "../components/Thumbnail";

export default function Home({ data }) {
  return (
    <Layout title="Inspiration, Creativity, Design">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mt-12">
          <h1 className="text-5xl font-bold">Spotlight</h1>
          <div className="flex">
            <p className="text-1xl font-bold">Sort by</p>
            <Badge text="LATEST FIRST" classNames="tracking-widest" />
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 mt-9 gap-8 h-[625px]">
          <Thumbnail
            variant="extended"
            category="UI/UX"
            imageURL="/images/3.jpg"
            title="Web Usability: Breadcrumbs Design Tips and Practices"
          />
          <Thumbnail
            category="ILLUSTRATION"
            title="12 Inspiring Illustrations About Workspaces, Creativity and Art"
            imageURL="/images/5.jpg"
          />
          <Thumbnail
            category="UI/UX"
            title="Photo Content in User Interfaces: 8 Basic Goals"
            imageURL="/images/4.jpg"
          />
          <Thumbnail
            category="UI/UX"
            title="Save the Planet: Web Designs on Environment and Ecological Issues"
            imageURL="/images/9.jpg"
          />
          <Thumbnail
            category="MOTION DESIGN"
            title="Big Review of Major UI Design Trends for Web and Mobile in 2020"
            imageURL="/images/7.jpg"
          />
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
