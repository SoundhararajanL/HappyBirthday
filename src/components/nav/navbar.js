import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './navbar.css';

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggle = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
      
      <span className="mah"></span>
    
      <NavLink className='nav-text' to="/gallery">Gallery🎴</NavLink>
      <NavLink className='nav-text' to="/book">Book💬</NavLink>

      <NavLink className='nav-text' to="/whatsappstart">Start💕</NavLink>
      <NavLink className='nav-text' to="/whatsappend">End💔</NavLink>
      <NavLink className='nav-text' to="/quotes">❝Quotes❞</NavLink>


      <a href="javascript:void(0);" className="icon" onClick={handleToggle}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
