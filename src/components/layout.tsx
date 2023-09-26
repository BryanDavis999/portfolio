import Head from 'next/head';
import Navbar from './Navbar';
import Footer from "./Footer/index"

import { Montserrat } from "@next/font/google";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400']
})

export const siteTitle: string = 'Portfolio';

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
      <main className={`h-screen -z-30 w-screen flex flex-col bg-orange-500 text-white dark:bg-sky-800 ${montserrat.className}`}>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;