import Layout from "../components/Layout";
import Badge from "../components/Badge";
import Thumbnail from "../components/Thumbnail";

//images
import image_usability from "../public/images/3.jpg";
import image_illustrations from "../public/images/5.jpg";
import image_goals from "../public/images/4.jpg";
import image_ecological from "../public/images/9.jpg";
import image_trends from "../public/images/7.jpg";

export default function Home({ data }) {
  return (
    <Layout title="Inspiration, Creativity, Design">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mt-12">
          <h1 className="text-4xl tracking-tight font-bold">Featured posts</h1>
          <div className="flex">
            <p className="text-sm font-bold">Sort by</p>
            <Badge text="LATEST FIRST" classNames="tracking-widest" />
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 mt-9 gap-8 h-[625px]">
          <Thumbnail
            variant="extended"
            category="UI/UX"
            imageURL={image_usability}
            title="Visualize Team Usage With Sophisticated Usage Dashboard"
          />
          <Thumbnail
            category="ILLUSTRATION"
            title="Supercharge your Vercel Projects with Integrations"
            imageURL={image_illustrations}
          />
          <Thumbnail
            category="UI/UX"
            title="$102M to Continue Building the Next Web, Together"
            imageURL={image_goals}
          />
          <Thumbnail
            category="UI/UX"
            title="Next.js 11, Next.js Live and more: A recap of Next.js Conf Special Edition"
            imageURL={image_ecological}
          />
          <Thumbnail
            category="MOTION"
            title="How Core Web Vitals Will Impact Google Rankings in 2021"
            imageURL={image_trends}
          />
        </div>
        <div className="flex justify-center items-center space-x-3 my-14">
          <p className="mt-[3px] text-sm font-medium text-gray-500">
            Scroll Down
          </p>
          <div className="flex justify-center items-center bg-blue-700 bg-opacity-20 dark:bg-opacity-30 w-7 h-7 rounded-full">
            <img src="/icons/arrow-down.svg" alt="Down Arrow Icon" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
