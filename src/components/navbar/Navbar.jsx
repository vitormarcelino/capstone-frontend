import React from 'react'
import './Navbar.css'

const Navbar = ({ setCurrentPage, currentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className='header-list md:inline hidden'>
        <ul>
          <li>
            <button 
              onClick={() => handleNavClick('home')}
              className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('about')}
              className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('menu')}
              className={`nav-button ${currentPage === 'menu' ? 'active' : ''}`}
            >
              Menu
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('reservations')}
              className={`nav-button ${currentPage === 'reservations' ? 'active' : ''}`}
            >
              Reservations
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('order')}
              className={`nav-button ${currentPage === 'order' ? 'active' : ''}`}
            >
              Order Online
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('login')}
              className={`nav-button ${currentPage === 'login' ? 'active' : ''}`}
            >
              Login
            </button>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar