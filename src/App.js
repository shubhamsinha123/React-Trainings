import React, { Component } from 'react';
import logo from '../src/assets/logo.svg'
import './App.css';
import Page from './components/Gallary-page/gallarypage';
import Headertwo from './components/header/Header2';
import Cookie from 'react-cookie-consent';
import Header from './components/header';
import Animation from './components/Animation/Animation';
import Country from './components/Countries/countries';
class App extends Component {
  render() {
    return (
      <>
        <marquee direction="left" scrollamount="20" className="floating-text">This site is in development mode now</marquee>
        <Headertwo />
        <Header />
        <Country />
        <Page />
        {/* <Animation /> */}
        <header>
          {/* <img src={logo} alt="logo" /> */}
        </header>
        {/* <span className="das">-----------------------------------------</span> */}
        {/* <Pagination /> */}
        <h1>Comming More.....</h1>
        <Cookie debug = {true} className = "cookie">
          <h1 className='cookie-msg'>I accept the <a href = "#terms">Terms and Conditions</a> here.. </h1>
        </Cookie>
      </>
    );
  }
}

export default App;
