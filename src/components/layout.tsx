import Head from 'next/head';
import Navbar from './Navbar';
import Footer from "./Footer/index"
import CanvasBase from './CanvasBase';
import useWindowDimensions from '@/hooks/useWindowDimensions';

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
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bryan Davis : portfolio"
        />
      </Head>
      <main className='h-screen w-screen'>
        <div className={`h-screen w-screen overflow-scroll flex flex-col text-white ${montserrat.className}`}>
          <Navbar />
          {children}
          <Footer />
        </div>
        <CanvasBase height={height} width={width}/>
      </main>
    </>
  );
}

export default Layout;