
import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Pagination from './components/pagination';
import Header from './components/header';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <h1 className="comment-head">Comment's-</h1>
        <span className="das">-----------------------------------------</span>
        <Pagination />
        <h1>New</h1>
      </>
    );
  }
}

export default App;
