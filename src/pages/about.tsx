import Image from 'next/image';
import { isEmpty } from "ramda";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import styles from "@/styles/markdown.module.css"
import Layout from '@/components/Layout';

const getPersonalInfoPath = (fileName:string) => path.join(process.cwd(), 'personal_info', `${fileName}.md`);
const getPersonalInfoContent = (fileName:string) => matter(
  fs.readFileSync(getPersonalInfoPath(fileName), 'utf8')
).content;

export const getStaticProps = () => {
  const employmentHistory = getPersonalInfoContent('employment');
  const educationHistory = getPersonalInfoContent('education')

  return ({
    props: {
      employmentHistory,
      educationHistory
    }
  })
}

const SectionWrapper = ({ className, children }: any) => (
  <section className={`w-full flex justify-center mt-10 ${className}`}>
    <div className='w-full px-5 py-5 flex justify-center max-w-screen-xl glass_background rounded-lg'>
      <div className='w-full max-w-screen-lg flex flex-col'>
        {children}
      </div>
    </div>
  </section>
)


const About = ({employmentHistory, educationHistory}: any) => {
  return (
    <Layout currentLocation='about'>
      <SectionWrapper className='mt-10'>
        <div className='md:h-60 py-4 flex flex-col md:flex-row'>
          <div className='w-52 h-52 relative aspect-square'>
            <Image fill={true} src='/self.jpg' alt='A photo of Bryan' className='rounded-2xl'/>
          </div>
          <div className='mt-6 ml-0 md:mt-0 md:ml-6'>
            <h1 className='text-4xl mb-6 font-bold'>Hi, I&apos;m Bryan.</h1>
            <span>A software developer who prides himself on elegant and easy-to-maintain solutions. </span>
            <span className='lg:inline-block'>I have two years of experience in full stack web development using React & Rails.</span>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className='mt-10'>
        <Markdown className={styles.markdown}>{employmentHistory}</Markdown>
      </SectionWrapper>
      <SectionWrapper className='my-10'>
        <Markdown className={styles.markdown}>{educationHistory}</Markdown>
      </SectionWrapper>
    </Layout>
  );
}

export default About