import React from 'react'
import './MobileNavBar.css'

const MobileNavBar = ({isVisible, setCurrentPage}) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Overlay */}
      <div className={`mobile-nav-overlay ${isVisible ? 'visible' : ''}`}></div>
      
      {/* Mobile Navigation */}
      <nav className={`mobile-nav-container ${isVisible ? 'visible' : ''}`}>
        <ul className='mobile-navbar'>
          <li>
              <button onClick={() => handleNavClick('home')} className="mobile-nav-button">
                Home
              </button>
          </li>
          <li>
              <button onClick={() => handleNavClick('about')} className="mobile-nav-button">
                About
              </button>
          </li>
          <li>
              <button onClick={() => handleNavClick('menu')} className="mobile-nav-button">
                Menu
              </button>
          </li>
          <li>
              <button onClick={() => handleNavClick('reservations')} className="mobile-nav-button">
                Reservations
              </button>
          </li>
          <li>
              <button onClick={() => handleNavClick('order')} className="mobile-nav-button">
                Order Online
              </button>
          </li>
          <li>
              <button onClick={() => handleNavClick('login')} className="mobile-nav-button">
                Login
              </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MobileNavBar