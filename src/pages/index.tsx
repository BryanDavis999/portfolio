import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import Footer from '@/components/footer';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} - Home</title>
      </Head>
      <h1>Hi There!</h1>
      <h2>{"I'm Bryan Davis"}</h2>
      <Footer />
    </Layout>
  );
}

export default Home