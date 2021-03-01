import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { Container, Heading1, Text } from '../styles/components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>KNWNW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container>
        <Heading1>Blog</Heading1>
        <Text>
          Sign up to the <Link href="/newsletter"><a>newsletter</a></Link> for weekly articles, 
          covering all things english.
        </Text>
      </Container>
    </div>
  )
}
