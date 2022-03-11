import React, { Component } from 'react';
import './App.css';
import Page from './components/Gallary-page/gallarypage';
import Headertwo from './components/header/Header2';
import Cookie from 'react-cookie-consent';
import Header from './components/header';
import Country from './components/Countries/countries';
class App extends Component {
  render() {
    return (
      <>
        <div className='marque'>
          <p>This site is in development mode now</p>
        </div>
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
        <Cookie debug={true} className="cookie">
          <h1 className='cookie-msg'>I accept the <a href="#terms">Terms and Conditions</a> here.. </h1>
        </Cookie>
      </>
    );
  }
}

export default App;
