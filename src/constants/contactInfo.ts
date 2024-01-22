import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

type contactDataType = Array<{name: string, link: string, Icon: React.ElementType}>

export const contactInfo: contactDataType = [
  {name: 'Github', link: 'https://github.com/BryanDavis999', Icon: FaGithub},
  {name: 'LinkedIn', link: 'https://linkedin.com/in/bryandavis999/', Icon: FaLinkedin},
  {name: 'Email', link: 'bryandavis999.dev@gmail.com', Icon: SiGmail},
]

export default contactInfo