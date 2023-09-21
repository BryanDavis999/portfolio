import Layout from '@/components/Layout';
import ContactLinks from '@/components/ContactLinks';

const Home = () => {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center flex-auto'>
        <div className='flex flex-col'>
          <h1 className='text-5xl text-gray-400 font-bold'>Bryan Davis</h1>
          <h2 className='text-3xl text-gray-500 font-light'>Web Developer & Designer</h2>
        </div>
      </section>
      <footer className='h-12 flex-initial'>
        <ContactLinks />
      </footer>
    </Layout>
  );
}

export default Home