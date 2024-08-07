import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaPhone } from 'react-icons/fa';

import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'
import Logo from '../assets/NewLogoName.png';
const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-screen h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '155px' }} />
      </div>

      {/* Colors
                background - #0a192f
                logo - #ff66c4
                social icons - #ff66c4
                text - text-gray-300
            */}

      {/* Menu */}

      <ul className='hidden md:flex cursor-pointer' >
        <li><Link to="home" smooth={true} duration={500} >
          Home
        </Link></li>
        <li><Link to="about" smooth={true} duration={500} >
          About
        </Link></li>
        <li><Link to="skills" smooth={true} duration={500} >
          Skills
        </Link></li>
        <li><Link to="work" smooth={true} duration={500} >
          Work
        </Link></li>
        <li><Link to="services" smooth={true} duration={500} >
          Services
        </Link></li>
        <li><Link to="contact" smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center cursor-pointer'}>
        <li  className='py-6 text-4xl'><li><Link onClick={handleClick} to="home" smooth={true} duration={500} >
          Home
        </Link></li></li>
        <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="about" smooth={true} duration={500} >
          About
        </Link></li></li>
        <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="skills" smooth={true} duration={500} >
          Skills
        </Link></li></li>
        <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="work" smooth={true} duration={500} >
          Work
        </Link></li></li>
        <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="services" smooth={true} duration={500} >
          Services
        </Link></li></li>
        <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
          Contact
        </Link></li></li>
      </ul>

      {/* Social Icons */}
      {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0 md:hidden'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/lisa-downie/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/LDdevs'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default Navbar