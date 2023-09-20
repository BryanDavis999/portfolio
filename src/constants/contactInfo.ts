import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

type contactDataType = Array<{name: string, link: string, Icon: React.ElementType}>

export const contactData: contactDataType = [
  {name: 'Github', link: 'https://github.com/BryanDavis999', Icon: FaGithub},
  {name: 'LinkedIn', link: 'https://linkedin.com/in/the-bryan-davis/', Icon: FaLinkedin},
  {name: 'Email', link: 'mailto:test@test.test', Icon: SiGmail},
]

export default contactData