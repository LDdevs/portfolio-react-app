import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../assets/NewLogoName.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const leftLinks = ['home', 'about', 'skills'];
  const rightLinks = ['work', 'services', 'contact'];

  return (
    <div className='fixed w-screen h-[80px] flex items-center px-4 bg-[#0a192f] text-gray-300 z-20 text-[20px]'>
      <div className='flex justify-between items-center w-full max-w-[1100px] mx-auto px-4'>

        {/* Left Links */}
        <ul className='hidden md:flex space-x-6'>
          {leftLinks.map((link) => (
            <li key={link} className='cursor-pointer hover:text-pink-400'>
              <Link to={link} smooth duration={500}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <img src={Logo} alt='Logo' style={{ width: '155px' }} />
        </div>

        {/* Right Links */}
        <ul className='hidden md:flex space-x-6'>
          {rightLinks.map((link) => (
            <li key={link} className='cursor-pointer hover:text-pink-400'>
              <Link to={link} smooth duration={500}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden ml-4 z-20 cursor-pointer'>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center border-t-4 border-pink-400 z-10'
        }
      >
        {[...leftLinks, ...rightLinks].map((link) => (
          <li key={link} className='py-6 text-4xl cursor-pointer hover:text-pink-400'>
            <Link onClick={handleClick} to={link} smooth duration={500}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;