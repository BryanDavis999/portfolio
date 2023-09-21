import Head from 'next/head';
import Navbar from './Navbar';

export const siteTitle = 'Portfolio';

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bryan Davis : portfolio"
        />
      </Head>
      <main className='h-screen w-screen flex flex-col'>
        <Navbar />
        {children}
      </main>
    </>
  );
}

export default Layout;