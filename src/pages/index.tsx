import Layout from '@/components/Layout';

import { Anton } from "@next/font/google";
const bebas = Anton({
  subsets: ['latin'],
  weight: ['400']
})

const Home = () => {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center flex-auto'>
        <div className='flex flex-col w-full max-w-6xl px-5'>
          <h1 className={`text-8xl font-bold uppercase ${bebas.className}`}>Bryan Davis</h1>
          <h2 className='mt-3 text-2xl font-light uppercase dark:text-blue-100 tracking-[0.13em]'>Web Developer & Designer</h2>
        </div>
      </section>
    </Layout>
  );
}

export default Home