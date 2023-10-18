import Layout from '@/components/Layout';
import {educationData, employmentData, eventRecordType} from '@/constants/aboutMe';
import Image from 'next/image';
import { isEmpty } from "ramda";

const Card = ({start, end, organization, description, additionalNotes = []}: eventRecordType) => {
  const timelineString = `${start} - ${end}`
  return (
    <div className='my-2 py-2'>
      <h2>{timelineString} : {organization}</h2>
      <p>{description}</p>
      {!isEmpty(additionalNotes) &&
        <ul className='text-gray-300 mt-3'>
          {additionalNotes.map(note => <li key={note}>{note}</li>)}
        </ul>
      }
    </div>
  )
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


const About = () => {
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
        <h1 className='text-4xl mb-6 font-bold'>Previous Employment</h1>
        {employmentData.map(record => <Card key={record.organization} {...record} />)}
      </SectionWrapper>
      <SectionWrapper className='my-10'>
        <h1 className='text-4xl mb-6 font-bold'>Educational Qualifications</h1>
        {educationData.map(record => <Card key={record.organization} {...record} />)}
      </SectionWrapper>
    </Layout>
  );
}

export default About