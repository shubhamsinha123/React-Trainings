import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-router-dom';
// import './header.css';
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li className="option">
            <a href="https://shubhamsinha123.github.io/Coca-Cola/deck.html">
              ABOUT
            </a>
          </li>
          {/* <Link to="/carousel"> */}
          {/* <Link to="/demo"> */}
          <li className="option">
            <a href="#">CONTACT</a>
            {/* CONTACT */}
          </li>
          {/* </Link> */}
          {/* </Link> */}
          <li className="option">
            <a href="#">BLOG</a>
          </li>
          <li className="option mobile-option">
            <a href="#">SIGN-IN</a>
          </li>
          <li className="option mobile-option">
            <a href="" className="sign-up">
              SIGN-UP
            </a>
          </li>
        </ul>
      </div>
      <ul className="signin-up">
        <li classNam>
          <a href="#">SIGN-IN</a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="" className="signup-btn">
            SIGN-UP
          </a>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
