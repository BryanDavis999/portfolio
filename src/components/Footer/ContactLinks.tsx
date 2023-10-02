import contactData from '@/constants/contactInfo';

const ContactLinks = () => 
  <div className='flex'>
    {contactData.map( ({name, link, Icon}) =>
      <a
        key={name}
        className='mx-2' //Complete dark mode
        href={link}
        target='_blank' // New Window
        rel='noopener noreferrer' // No Headers or Context
      >
        <Icon size={27}/>
      </a>
    )}
  </div>

export default ContactLinks