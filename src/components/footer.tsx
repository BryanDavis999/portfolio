import contactData from '@/constants/contactInfo';

const Footer = () => 
  <div className='flex'>
    {contactData.map( ({name, link, Icon}) =>
      <a
        key={name}
        className='m-2 bg-red-500' //Investigate dark mode
        href={link}
        target='_blank' // New Window
        rel='noopener noreferrer' // No Headers or Context
      >
        <Icon size={30}/>
      </a>
    )}
  </div>

export default Footer