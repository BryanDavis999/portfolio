// import {GoHomeFill} from "react-icons/go"

const Navbar = () => 
  <header className='h-12 p-2 w-full flex-initial flex justify-center items-center border-b border-blue-500'>
    <div className="w-full max-w-6xl px-5 flex justify-between">
      <span>
        {/* <GoHomeFill size={30} color="white" /> */}
      </span>
      <div className="">
        <span>About Me | </span>
        <span>Projects | </span>
        <span>Blog</span>
      </div>
    </div>
  </header>

export default Navbar