import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoimg from '../images/logo-no-background.png'
import SearchBar from './SearchBar'
import { FaLanguage } from "react-icons/fa6";
import LanguageSelector from './LanguageSelector';

function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const handleClick = () => {
  setIsDropdownOpen(!isDropdownOpen);
};

  // #F6F8FC

  return (
      <header className='shadow z-50 top-0 fixed w-screen'>
        <nav className='bg-[#FFFFFF] border-gray-200 w-full lg:h-32 py-[7px] sm:py-4'>
        <div className='md:flex flex-row justify-between items-center flex-wrap mx-1 p-2 w-12/12'>
          <Link to="/" className='inline-block'>
            <img src={logoimg} alt="Globe Talks" className='w-32 sm:w-48 md:w-[9.5rem] object-contain' />
          </Link>

          <div className='hidden md:block flex w-9/12 mx-auto my-2 md:my-0 md:w-5/12 bg-slate-200 rounded-full drop-shadow-lg justify-between items-center'>
            <SearchBar />
          </div>

          <div className='flex justify-center items-center dropdown relative'>
                <FaLanguage className='w-8 h-8 text-[#393939] hover:text-slate-800 mr-20  cursor-pointer fixed' onClick={handleClick}/>
                {isDropdownOpen && <LanguageSelector closeDropDown={() => setIsDropdownOpen(false)}/>}
          </div>


          <div className='visible md:hidden flex flex-row w-full justify-around items-center mt-[5px]'>
            <div className='flex w-9/12 bg-slate-200 rounded-full drop-shadow-lg justify-between items-center'>
              <SearchBar />
            </div>
            <div className='relative'>
              <FaLanguage className='w-10 h-10 text-[#393939] hover:text-slate-800 mr-2  cursor-pointer' onClick={handleClick}/>
              {isDropdownOpen && <LanguageSelector closeDropDown={() => setIsDropdownOpen(false)}/>}
            </div>
          </div>

        <input type="checkbox" id="menyAvPaa"/>
        <label id="burger" htmlFor="menyAvPaa">
        <div></div>
        <div></div>
        <div></div>
        </label>
        <nav id="meny">
        <ul className='flex font-medium flex-col justify-between text-white my-24 text-center gap-y-[5vh]'>
                <li>
                  <NavLink to="/" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')}>
                    Contact
                  </NavLink>
                </li>
                <hr className='my-2'/>
                <li>
                    <NavLink 
                      to="/world" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')}
                    >
                      World
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/business" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')} 
                    >
                      Business
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/technology" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')}
                    >
                      Technology
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/sports" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')}
                    >
                      Sports
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/entertainment" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')}
                    >
                      Entertainment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/science" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')}
                    >
                      Science
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/health" className={({isActive}) => (isActive ? 'bg-slate-500 px-3 py-1.5 rounded-xl' : '')}
                    >
                      Health
                    </NavLink>
                  </li>
        </ul>
        </nav>


          <div className='ld:flex items-center px-4 ld:block hidden nav2'>
              <ul className='flex font-medium flex-row space-x-8 nav1'>
                <li>
                  <NavLink to="/" className={({isActive}) => (isActive ? 'bg-slate-100 px-3 py-1.5 rounded-xl text-blue-600 backdrop-blur-3xl backdrop-filter' : 'text-slate-700 abcd')}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({isActive}) => (isActive ? 'bg-slate-100 px-3 py-1.5 rounded-xl text-blue-600 backdrop-blur-3xl backdrop-filter' : 'text-slate-700 abcd')}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({isActive}) => (isActive ? 'bg-slate-100 px-3 py-1.5 rounded-xl text-blue-600 backdrop-blur-3xl backdrop-filter' : 'text-slate-700 abcd')}>
                    Contact
                  </NavLink>
                </li>
              </ul>
          </div>
        </div>

        <div className='w-full mt-4 ld:block hidden nav2'>
          <div className='lg:flex-row md:mx-28 lg:mx-56'>
              <nav className='p-1'>
                <ul className="flex justify-around items-center text-slate-800">
                  <li>
                    <NavLink 
                      to="/world"
                      className={({isActive}) => (isActive ? 'abcde' : 'hover:text-[#000] text-slate-700')} 
                    >
                      World
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/business"
                      className={({isActive}) => (isActive ? 'abcde' : 'hover:text-[#000] text-slate-700')} 
                    >
                      Business
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/technology"
                      className={({isActive}) => (isActive ? 'abcde' : 'hover:text-[#000] text-slate-700')}
                    >
                      Technology
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/sports"
                      className={({isActive}) => (isActive ? 'abcde' : 'hover:text-[#000] text-slate-700')}
                    >
                      Sports
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/entertainment"
                      className={({isActive}) => (isActive ? 'abcde' : 'hover:text-[#000] text-slate-700')}
                    >
                      Entertainment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/science"
                      className={({isActive}) => (isActive ? 'abcde' : 'hover:text-[#000] text-slate-700')}
                    >
                      Science
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/health"
                      className={({isActive}) => (isActive ? 'abcde' : 'hover:text-[#000] text-slate-700')}
                    >
                      Health
                    </NavLink>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
        </nav>
      </header>
  )
}

export default Header