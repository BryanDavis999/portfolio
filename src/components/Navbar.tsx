import Link from "next/link"
import {GoHomeFill} from "react-icons/go"

const Navbar = () => 
  <header className='h-12 w-full flex-initial flex justify-center items-center mt-16'>
    <div className="w-full px-5 py-3 max-w-screen-xl flex justify-center rounded-md glass_background">
      <div className="w-full max-w-screen-lg flex justify-between">
        <Link href={`/`}> {/* Hide if already at home */}
          <GoHomeFill size={27} />
        </Link>
        <div className="uppercase mt-1">
          <Link href={`/about`}>About Me | </Link>
          <Link href={`/blog`}>Blog | </Link>
          <Link href={`/projects`}>Projects</Link>
        </div>
      </div>
    </div>
  </header>

export default Navbar