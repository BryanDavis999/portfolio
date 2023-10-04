import Layout from '@/components/Layout';
import useWindowDimensions from '@/hooks/useWindowDimensions';


const About = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Layout>
      <section className='flex flex-col justify-center items-center flex-auto'>
        <div className='flex flex-col w-full max-w-screen-lg px-5 lg:px-0'>
          <div className='glass_background px-16 py-6'>Card Stub</div>
        </div>
      </section>
    </Layout>
  );
}

export default About