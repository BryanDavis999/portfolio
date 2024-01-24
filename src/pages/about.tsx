import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'react-markdown';
import styles from "@/styles/markdown.module.css"
import Layout from '@/components/Layout';

import skillIcons from '@/constants/personalInfo/skillIcons';

const getPersonalInfoPath = (fileName:string) => path.join(process.cwd(), 'src', 'constants', 'personalInfo', `${fileName}.md`);
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
    <div className='w-full px-5 py-1 flex justify-center max-w-screen-xl glass_background rounded-lg'>
      <div className='w-full max-w-screen-lg flex flex-col'>
        {children}
      </div>
    </div>
  </section>
)

const SkillIcons = () => (
  <div className='mt-5 flex items-center h-8 space-x-3'>
    {skillIcons.map(({id, Icon, size}) => <Icon key={id} size={size} />)}
  </div>
)


const About = ({employmentHistory, educationHistory}: any) => {
  return (
    <Layout currentLocation='about'>
      <SectionWrapper className='mt-10'>
        <div className='py-10 flex flex-col md:flex-row'>
          <div className='w-52 h-52 relative aspect-square'>
            <Image fill={true} src='/about/self.jpg' alt='A photo of Bryan' className='rounded-2xl'/>
          </div>
          <div className='mt-6 ml-0 md:mt-0 md:ml-6 flex flex-col justify-between'>
            <h1 className='text-4xl mb-6 font-semibold '>Hi, I&apos;m Bryan.</h1>
            <div>
              <span>A software developer who prides himself on elegant and easy-to-maintain solutions. </span>
              <span className='lg:inline-block'>I have three years of professional experience in full stack web development. </span>
              <span className='block'>I&apos;m proficient in the frameworks below.</span>
            </div>
            <SkillIcons />
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