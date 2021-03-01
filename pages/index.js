import Head from 'next/head';
import Header from '../components/Header';
import Title from '../components/Title';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Branndland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title />
    </div>
  )
}
