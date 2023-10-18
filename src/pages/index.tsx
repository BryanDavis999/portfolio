import Layout from '@/components/Layout';

import { Anton } from "@next/font/google";
const bebas = Anton({
  subsets: ['latin'],
  weight: ['400']
})

const Home = () => {
  return (
    <Layout currentLocation="home">
      <section className='flex flex-col justify-center items-center flex-auto'>
        <div className='flex flex-col w-full max-w-screen-lg px-5 lg:px-0'>
          <h1 className={`text-8xl font-bold uppercase text-gray-700 dark:text-gray-200 ${bebas.className}`}>Bryan Davis</h1>
          <h2 className='mt-3 text-2xl font-light uppercase text-gray-700 dark:text-gray-200 tracking-[0.13em]'>Web Developer & Designer</h2>
        </div>
      </section>
    </Layout>
  );
}

export default Home