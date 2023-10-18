import Layout from '@/components/Layout';
import Image from 'next/image';


const Experiments = () => {
  return (
    <Layout currentLocation='experiments'>
      <section className='w-full flex justify-center my-10'>
        <div className='w-full px-5 py-5 flex justify-center max-w-screen-xl glass_background rounded-lg'>
          <div className='w-full max-w-screen-lg flex flex-col'>
            <div className='md:h-60 py-4 flex flex-col md:flex-row'>
              <div className='w-52 h-52 relative aspect-square'>
                <Image fill={true} src='/self.jpg' alt='Experiment 1' className='rounded-2xl'/>
              </div>
              WIP : Experiment 1
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Experiments