import Layout from '@/components/Layout';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import aboutMeTimelineData, {timelineRecordType} from '@/constants/aboutMe';

const Card = ({start, end, organization, description, additionalNotes}: timelineRecordType) => {
  const timelineString = `${start} - ${end}`
  return (
    <div className='my-2 py-2'>
      <h2>{timelineString} : {organization}</h2>
      <p>{description}</p>
      <hr />
      <ul>
        {additionalNotes.map(note => <li key={note}>{note}</li>)}
      </ul>
    </div>
  )
}


const About = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Layout>
      <section className='w-full flex h-[900px] justify-center py-10'>
        <div className='w-full flex justify-center max-w-screen-xl glass_background'>
          <div className='w-full max-w-screen-lg flex flex-col py-6'>
            {aboutMeTimelineData.map(record => <Card key={record.organization} {...record} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About