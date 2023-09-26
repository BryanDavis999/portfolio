import Link from "next/link"
import {GoHomeFill} from "react-icons/go"

const Navbar = () => 
  <header className='h-12 p-2 w-full flex-initial flex justify-center items-center bg-orange-600 dark:bg-sky-700 mt-7 z-50'>
    <div className="w-full max-w-6xl px-5 flex justify-between">
      <Link href={`/`}> {/* Hide if already at home */}
        <GoHomeFill size={27} />
      </Link>
      <div className="uppercase">
        <Link href={`/about`}>About Me | </Link>
        <Link href={`/blog`}>Blog | </Link>
        <Link href={`/projects`}>Projects</Link>
      </div>
    </div>
  </header>

export default Navbar