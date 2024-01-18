import Link from "next/link"
import {GoHomeFill} from "react-icons/go"
import { pagesEnum } from "../constants"
import { Links } from "./constants"
import classNames from "classnames"

type NavbarProps = {
  currentLocation: pagesEnum
}

const Navbar = ({currentLocation}: NavbarProps) => {
  return (
    <header className='h-12 w-full flex-initial flex justify-center items-center mt-16'>
      <div className="w-full px-5 py-3 max-w-screen-xl flex justify-center rounded-md glass_background">
        <div className="w-full max-w-screen-lg flex justify-between">
          <Link href={`/`}> {/* Hide if already at home */}
            <GoHomeFill size={27} className={classNames({
              'unclickable_link': currentLocation === 'home',
              'clickable_link': currentLocation !== 'home' 
            })}/>
          </Link>
          <div className="uppercase mt-1">
            {
              Links.map( ({key, link, text}, index) => (
                <Link key={key} href={link} className={classNames({
                  'px-2 border-black dark:border-white': true,
                  'border-r': index !== Links.length -1,
                  'unclickable_link': currentLocation === key,
                  'clickable_link': currentLocation !== key 
                })}>
                  {text}
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar