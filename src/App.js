
import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Pagination from './components/pagination';
import Header from './components/header';
import Carousel1 from './components/3dcarousel';
import Demo from './components/demo';
import SeeResult from './components/seersults';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <marquee direction="left" scrollamount="20" className="floating-text">This site is in development mode now</marquee>
        <h1 className="comment-head">3D Slider Demo</h1>
        <p>each time you refresh, you will get a new slider content</p>
        <Carousel1 />

        <span className="das">-----------------------------------------</span>
        {/* <Pagination /> */}
        <h1>Comming More.....</h1>
        <Demo />
        <SeeResult />
      </>
    );
  }
}

export default App;
