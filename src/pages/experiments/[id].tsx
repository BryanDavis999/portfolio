import Head from 'next/head';
import { getAllExperimentIds, getExperimentCode } from '@/components/Experiments';
import useWindowDimensions from '@/hooks/useWindowDimensions';

export const getStaticPaths = () => {
  const paths = getAllExperimentIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = ({ params: { id } }: any) => (
  { props: { id } }
)

type ExperimentProps = {
  id: string
}

const Experiment = ({ id }: ExperimentProps) => {
  const { height, width } = useWindowDimensions();
  const ExperimentCode = getExperimentCode(id)

  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <div className='absolute top-0 left-0 w-screen h-screen'>
        <ExperimentCode height={height} width={width}/>
      </div>
    </>
  );
}

export default Experiment