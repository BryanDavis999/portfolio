import {GoHomeFill} from "react-icons/go"

const Navbar = () => 
  <header className='h-12 p-2 w-full flex-initial flex justify-center items-center bg-orange-600 dark:bg-sky-700 mt-7'>
    <div className="w-full max-w-6xl px-5 flex justify-between">
      <span>
        {/* <GoHomeFill size={27} /> */}
      </span>
      <div className="uppercase">
        <span>About Me | </span>
        <span>Blog | </span>
        <span>Projects</span>
      </div>
    </div>
  </header>

export default Navbar