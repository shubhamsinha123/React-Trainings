import React, { Component } from 'react';
import logo from '../src/assets/logo.svg'
import './App.css';
import Cookie from 'react-cookie-consent';
import Header from './components/header';
class App extends Component {
  render() {
    return (
      <>
        <marquee direction="left" scrollamount="20" className="floating-text">This site is in development mode now</marquee>
        <Header />
        <header>
          <img src={logo} alt="logo" />
        </header>
        {/* <span className="das">-----------------------------------------</span> */}
        {/* <Pagination /> */}
        <h1>Comming More.....</h1>
        <Cookie debug = {true} className = "cookie">
          <h1>This is my cookie....</h1>
        </Cookie>
      </>
    );
  }
}

export default App;
