import Head from 'next/head';
import Markdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from "next/link"
import { IoCaretBackOutline } from "react-icons/io5"
import styles from "@/styles/markdown.module.css"

import { getAllExperimentIds, getExperimentCode } from '@/components/Experiments';
import ThemeIcon from '@/components/common/ThemeIcon';

export const getStaticPaths = () => {
  const paths = getAllExperimentIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = ({ params: { id } }: any) => {
  const experimentInfoPath = path.join(process.cwd(), 'src', 'constants', 'experimentInfo', id + '.md');
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
  <div className={`h-7 px-5 flex justify-between items-center ${customStyle}`}>
    <Link href={`/experiments`}>
      <IoCaretBackOutline size={33} className='clickable_link' />
    </Link>
    <span className='text-lg uppercase font-semibold tracking-wide'>Bryan Davis</span>
    <ThemeIcon />
  </div>
)

const Experiment = ({ id, info }: ExperimentProps) => {
  const ExperimentCode = getExperimentCode(id)

  return (
    <>
      <Head>
        <title>{id}</title>
      </Head>
      <div className='absolute top-0 left-0 w-screen h-[100dvh] flex flex-col overflow-scroll md:flex-row md:overflow-clip'>
        <NavBar customStyle='md:hidden my-5'/>
        <div className='w-full md:w-1/2 md:flex md:items-center md:justify-center bg-gray-600 dark:bg-gray-800'>
          <div className='grow-0 aspect-square w-full md:max-w-2xl bg-red-500 flex items-center justify-center'>
            <ExperimentCode />
          </div>
        </div>
        <div className='bg-gray-300 dark:bg-black w-full md:w-1/2 overflow-none md:overflow-y-auto p-5'>
          <NavBar customStyle='hidden md:flex mb-5'/>
          <Markdown className={styles.markdown}>{info}</Markdown>
        </div>
      </div>
    </>
  );
}

export default Experiment