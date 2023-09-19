import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'Portfolio';

type LayoutProps = {
  children: React.ReactNode,
  home?: boolean
}

const Layout = ({children, home = false}: LayoutProps) => {
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