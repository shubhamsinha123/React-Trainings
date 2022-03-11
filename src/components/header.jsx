import React, { useState } from 'react';
import { ReactComponent as CloseMenu } from '../assets/x.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Demo from './demo';
import Search from './search'
import Banner from './music/banner';
import Carousel1 from './3dcarousel';
import Pagination from './pagination';
// import './header.css';
export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <Router>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="/React-Trainings">
              <Logo className="logo" />
            </a>
          </div>
          <ul className={click ? 'nav-options active' : 'nav-options'}>
            <li className="option">
              <a
                href="https://shubhamsinha123.github.io/Coca-Cola/deck.html"
                target="_blank"
              >
                NEW PAGE
              </a>
            </li>
            {/* <Link to="/carousel"> */}
            <Link to="/demo">
              <li className="option">
                {/* <a href="#">CONTACT</a> */}
                DEMO
              </li>
              {/* </Link> */}
            </Link>
            <Link to="/carousel">
              <li className="option">3D CAROUSEL</li>
            </Link>
            <Link to="/pagination">
              <li className="option">PAGINATION</li>
            </Link>
            <Link to="/search">
              <li className="option">SEARCH</li>
            </Link>
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
          <li className="seperator">
            <a href="#">SIGN-IN</a>
          </li>
          <li className="seperator" onClick={closeMobileMenu}>
            <a href="" className="signup-btn">
              SIGN-UP
            </a>
          </li>
          <Link to="/music-home">
            <li className="seperator">MUSIC</li>
          </Link>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>

      <Switch>
        <Route path="/demo">
          <Demo />
        </Route>
        <Route path="/carousel">
          <Carousel1 />
        </Route>
        <Route path="/pagination">
          <Pagination />
        </Route>
        <Route path = "/search">
        <Search />
        </Route>
        <Route path="/music-home">
          <Banner />
        </Route>
      </Switch>
    </Router>
  );
}