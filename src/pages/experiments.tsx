import { experimentDetails } from '@/components/Experiments';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const ExperimentCard = ({id, title, engine}: any) => (
  <Link href={`/experiments/${id}`}>
    <div className='bg-blue-500 h-52 w-40 relative flex items-center'>
      <Image fill={true} src={`/experiments/${id}.png`} alt={title}/>
      <div className= 'w-full py-2 bg-slate-300 dark:bg-black absolute uppercase text-sm text-center'>
        {title}
      </div>
    </div>
  </Link>
)


const Experiments = () => {
  return (
    <Layout currentLocation='experiments'>
      <section className='w-full flex justify-center my-10'>
        <div className='w-full px-5 py-5 flex justify-center max-w-screen-xl glass_background rounded-lg'>
          <div className='w-full max-w-screen-lg flex space-x-10'>
            {experimentDetails.map(
              ({id, title, engine}) => <ExperimentCard key={id} id={id} title={title} engine={engine}/>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Experiments