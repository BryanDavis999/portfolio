import Head from 'next/head';
import { Montserrat } from "@next/font/google";

import Navbar from './Navbar/index';
import Footer from "./Footer/index"
import ConnectedDots from './ConnectedDots';
import { pagesEnum } from './constants';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400']
})

export const siteTitle: string = 'Portfolio';

type LayoutProps = {
  children: React.ReactNode
  currentLocation: pagesEnum
}

const Layout = ({children, currentLocation}: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bryan Davis : portfolio"
        />
      </Head>
      <main className='h-[100dvh] w-screen'>
        <div className={`h-[100dvh] w-screen overflow-y-scroll hidden_scrollbar flex flex-col text-white ${montserrat.className}`}>
          <Navbar currentLocation={currentLocation}/>
          {children}
          <Footer />
        </div>
        <ConnectedDots />
      </main>
    </>
  );
}

export default Layout;