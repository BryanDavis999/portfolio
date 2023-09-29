import CanvasBase from '@/components/CanvasBase';
import Layout from '@/components/Layout';
import useWindowDimensions from '@/hooks/useWindowDimensions';

import { Anton } from "@next/font/google";
const bebas = Anton({
  subsets: ['latin'],
  weight: ['400']
})

const Home = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Layout>
      <section className='flex flex-col justify-center items-center flex-auto'>
        <div className='flex flex-col w-full max-w-6xl px-5'>
          <h1 className={`text-8xl font-bold uppercase ${bebas.className} z-20`}>Bryan Davis</h1>
          <h2 className='mt-3 text-2xl font-light uppercase dark:text-blue-100 tracking-[0.13em] z-20'>Web Developer & Designer</h2>
          <div className='absolute top-0 left-0 w-screen h-screen z-10'>
            <CanvasBase height={height} width={width}/>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home