import Head from "next/head";
import { useState } from "react";
import Article from "../components/Article";

export default function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      title:
        "Shift overall look and feel by adding these wonderful touches to furniture in your home",
      description:
        "React components outside of main will not be initialized by the browser. Do not add application logic here or custom CSS. If you need base components in your pages (like a menu or a toolbar), take a look at the App component instead.",
      imageURL: "/images/6.png",
      avatar: "/images/maria.jpg",
      author: "Maria Yusefnova",
      publishedAt: "29 June 2021",
    },
    {
      id: 2,
      title: "Top 10 ideas on how to celebrate your own birthday",
      description:
        "The idea behind this class is that it allows you to have an optimal reading width. We added a new max-width by default called max-w-prose. If you are familiar with the typography plugin you might recognize this one. The idea behind this class is that it allows you to have an optimal reading width and height.",
      imageURL: "/images/5.jpg",
      avatar: "/images/maria.jpg",
      author: "Maria Yusefnova",
      publishedAt: "12 December 2020",
    },
  ]);

  return (
    <div className="my-4 px-4">
      <Head>
        <title>Windphace - Creativity, Inspiration, Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data.map((article) => (
        <Article {...article} key={article.id} />
      ))}
    </div>
  );
}
