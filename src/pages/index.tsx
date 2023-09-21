import Layout from '@/components/Layout';

const Home = () => {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center flex-auto'>
        <div className='flex flex-col w-full max-w-6xl px-5'>
          <h1 className='text-6xl text-gray-400 font-bold'>Bryan Davis</h1>
          <h2 className='text-3xl text-gray-500 font-light'>Web Developer & Designer</h2>
        </div>
      </section>
    </Layout>
  );
}

export default Home