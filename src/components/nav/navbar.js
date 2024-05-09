import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import './navbar.css';

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggle = () => {
    setIsResponsive(!isResponsive);
  };

  const handleNavigation = (path) => {
    // Navigate to the specified path
    window.location.href = path;
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      
      <span className="mah"></span>
    
      
      <a className='nav-text' href="/gallery">Gallery🎴</a>
      <a className='nav-text' href="/Messages">Messages💬</a>

     
      <a className='nav-text' href="#" onClick={() => handleNavigation("/whatsapp/start")}>Start💕</a>
      <a className='nav-text' href="#" onClick={() => handleNavigation("/whatsapp/end")}>End💔</a>

      <a href="javascript:void(0);" className="icon" onClick={handleToggle}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
