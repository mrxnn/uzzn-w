import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} - DSSX`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
