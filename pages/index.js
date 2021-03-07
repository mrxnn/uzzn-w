import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Windphace - Creativity, Inspiration, Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  );
}
