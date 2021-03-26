import Article from "../components/Article";
import Layout from "../components/Layout";

export default function Home({ data }) {
  return (
    <Layout title="Inspiration, Creativity, Design">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mt-12">Featured</h1>
        <div className="grid grid-cols-4 grid-rows-2 mt-9 gap-8">
          <Article
            variant="lg"
            category="UI/UX"
            imageURL="/images/5.jpg"
            title="Web Usability: Breadcrumbs Design Tips and Practices"
            subtitle="In this article, let's continue the theme of web usability: learn what
                  is breadcrumbs, explore their types and check UX practices to make
                  them work effectively."
          />
          <Article
            category="ILLUSTRATION"
            title="45 Inspiring Illustrations About Workspaces, Creativity and Art"
            imageURL="/images/3.jpg"
          />
          <Article
            category="UI/UX"
            title="45 Photo Content in User Interfaces: 8 Basic Goals"
            imageURL="/images/4.jpg"
          />
          <Article
            category="UI/UX"
            title="Save the Planet: Web Designs on Environment and Ecological Issues"
            imageURL="/images/9.jpg"
          />
          <Article
            category="MOTION DESIGN"
            title="Big Review of Major UI Design Trends for Web and Mobile in 2020"
            imageURL="/images/7.jpg"
          />
        </div>
      </div>
    </Layout>
  );
}
