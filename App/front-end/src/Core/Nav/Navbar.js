import React, { useState } from 'react';

import './Navbar.css'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    function hideMenu() {
        document.removeEventListener("click", hideMenu);
        setIsOpen(false);
    }

  return (
    <div>
      <div className="nav-container">
        <h1>Navbar</h1>
        
        <div className="menu-container">
            <div className={`menu-icon ${isOpen ? 'menu-icon--open' : ''}`} onClick={handleClick} onMouseLeave={() => {
            document.addEventListener("click", hideMenu)}}>
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
                <div className="menu-icon__line"></div>
            </div>                     
        </div>
      </div>
    </div>
  );
}

export default Navbar;
