import React, { useState } from 'react';
import { PiBagLight } from "react-icons/pi";
import './Navbar.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="app__navbar">
      <button className={`app__navbar__menu-icon ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <span></span>
        <span></span>
      </button>
      <div className="app__navbar__title-box">
        <a className="app__navbar__title h__font" href="#home">Atelier</a>
      </div>
      <PiBagLight className="app__navbar__bag" />
    </div>
  );
};

export default Navbar;


