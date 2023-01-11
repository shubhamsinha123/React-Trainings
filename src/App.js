import React, { Component } from 'react';
import './App.css';
// import Page from './components/Gallary-page/gallarypage';
import Headertwo from './components/header/Header2';
import Cookie from 'react-cookie-consent';
import Header from './components/header';
import Country from './components/Countries/countries';
// import CookieConsent from 'react-cookie-consent';
import "react-image-gallery/styles/css/image-gallery.css";
// import ReactImageGallery from 'react-image-gallery';
class App extends Component {
  render() {
    const images = [
      {
        original: 'https://picsum.photos/300',
        thumbnail: 'https://picsum.photos/300',
      },
      {
        original: 'https://picsum.photos/300/304/?random',
        thumbnail: 'https://picsum.photos/300/304/?random'
      },
      {
        original: 'https://picsum.photos/300/305/?random',
        thumbnail: 'https://picsum.photos/300/306/?random'
      }
    ]
    return (
      <>
        {/* <div className='marque'>
          <p>This site is in development mode now</p>
        </div> */}
        {/* <Headertwo /> */}
        <Header />
        {/* <ReactImageGallery items={images} /> */}
        {/* <SignIn /> */}
        {/* <img className='image-email' src='https://i.ibb.co/54XSvtx/DT-banner.jpg'></img> */}
        {/* <Country /> */}
        {/* <Page /> */}
        {/* <Animation /> */}
        <header>
          {/* <img src={logo} alt="logo" /> */}
        </header>
        {/* <span className="das">-----------------------------------------</span> */}
        {/* <Pagination /> */}
        {/* <h1>Comming More.....</h1> */}
        <Cookie
          debug={true}
          expires={30}
          className="cookie">
          <h3 style={{ textAlign: "center" }} className='cookie-msg'>I accept the <a href="#terms">Terms and Conditions</a> here.. </h3>
        </Cookie>
        {/* <CookieConsent
          location="bottom"
          buttonText="Sure man!!"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={20}
        >
          This website uses cookies to enhance the user experience.{" "}
          {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
        {/* </CookieConsent> */}
      </>
    );
  }
}

export default App;
