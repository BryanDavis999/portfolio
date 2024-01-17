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

const NavBar = ({customStyle}: any) => (
  <div className={`h-6 bg-blue-500 flex justify-between items-center ${customStyle}`}>
    <div className='flex'>
      <p>Back</p>
      <p>Forward</p>
    </div>
    <div className='flex'>
      <p>Theme</p>
      <p>Home</p>
    </div>
  </div>
)

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
        <NavBar customStyle='md:hidden my-5'/>
        <div className='w-full md:w-1/2 md:flex md:items-center md:justify-center bg-red-900'>
          <div className='grow-0 aspect-square w-full md:max-w-2xl bg-red-500 flex items-center justify-center'>
            <p>{id} content</p>
            {/* <ExperimentCode /> */}
          </div>
        </div>
        <div className='bg-black w-full md:w-1/2 md:overflow-y-scroll p-5'>
          <NavBar customStyle='hidden md:flex mb-5'/>
          <Markdown>{info}</Markdown>
        </div>
      </div>
    </>
  );
}

export default Experiment