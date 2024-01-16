import Head from 'next/head';
import { getAllExperimentIds, getExperimentCode } from '@/components/Experiments';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { useEffect } from 'react';
import Markdown from 'react-markdown';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getStaticPaths = () => {
  const paths = getAllExperimentIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = ({ params: { id } }: any) => {
  const experimentInfoPath = path.join(process.cwd(), 'experiment_info', id + '.md');
  const fileContent = fs.readFileSync(experimentInfoPath, 'utf8');
  const matterObject = matter(fileContent);

  return ({
    props: {
      id,
      info: matterObject.content,
    }
  })
}

type ExperimentProps = {
  id: string,
  info: string
}

const Experiment = ({ id, info }: ExperimentProps) => {
  // const ExperimentCode = getExperimentCode(id)

  const { height, width } = useWindowDimensions();
  const size = width < height ? width : height

  const containerDimensions = `h-[${size}px] w-[${size}px]`

  console.log(containerDimensions)

  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <div className='absolute top-0 left-0 w-screen h-screen flex flex-col overflow-scroll md:flex-row md:overflow-clip'>
        <div className='w-full bg-red-900'>
          <div className='grow-0 aspect-square w-full bg-red-500'>
            The content in question.
            {/* <ExperimentCode /> */}
          </div>
        </div>
        <div className='bg-blue-500 w-full md:w-1/2'>
          <Markdown>{info}</Markdown>
        </div>
      </div>
    </>
  );
}

export default Experiment