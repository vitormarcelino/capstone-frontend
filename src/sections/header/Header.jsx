import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Navbar from '../../components/navbar/Navbar'
import logo from '../../img/Logo.svg'
import MobileNavBar from '../../components/mobile-navbar/MobileNavBar'
import './Header.css'

const Header = ({ setCurrentPage, currentPage }) => {
  const [mobileNav, setMobileNav] = useState(false);
  
  const handleNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
  };
  
  return (
    <header>
        <div className='header-container'>
          {/* Logo Section */}
          <div className='logo-section'>
            <button onClick={handleLogoClick} className='logo-button'>
              <img src={logo} alt="Little lemon logo" />
            </button>
          </div>

          {/* Navigation Section */}
          <div className='nav-section'>
            {/* Desktop Menu */}
            <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            
            {/* Mobile Menu Button */}
            <button className='mobile-menu-button' onClick={handleNav}>
              {mobileNav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <MobileNavBar isVisible={mobileNav} setCurrentPage={setCurrentPage} />
    </header>
  )
}

export default Header