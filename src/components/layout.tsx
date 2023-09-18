import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'Portfolio';

const Layout = ({children, home = false}:{children: React.ReactNode, home?: boolean}) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bryan Davis : portfolio"
        />
      </Head>
      <header>
        Navbar goes here
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;