import contactData from '@/constants/contactInfo';

const ContactLinks = () => 
  <div className='flex w-full bg-red-500'>
    {contactData.map( ({name, link, Icon}) =>
      <a
        key={name}
        className='m-2 bg-red-500 dark:bg-blue-500' //Complete dark mode
        href={link}
        target='_blank' // New Window
        rel='noopener noreferrer' // No Headers or Context
      >
        <Icon size={30}/>
      </a>
    )}
  </div>

export default ContactLinks