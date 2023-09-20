import Layout from '@/components/Layout';
import ContactLinks from '@/components/ContactLinks';

const Home = () => {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center flex-auto'>
        <div className='flex flex-col'>
          <h1 className='text-3xl text-gray-500'>Hi There!</h1>
          <h2 className='text-5xl'>{"I'm Bryan Davis"}</h2>
        </div>
      </section>
      <footer className='h-12 flex-initial'>
        <ContactLinks />
      </footer>
    </Layout>
  );
}

export default Home