import React from 'react';
// import './musicbanner.css';
import './css/musicbanner.css'
import { Link } from 'react-router-dom';
// import HeadPhone from '../.././assets/headphones.svg';
import HeadPhone from '../../assets/img/headphones.svg'

class Banner extends React.Component {
  render() {
    return (
      <section id="main">
        <div className="nav-item">
          <a className="navbar-brand" href="/">
            Saudio
          </a>
        </div>
        <div className="main-row">
          <div className="main-row-img">
            <img className="head-phone-img" src={HeadPhone} alt="" />
          </div>
          <div className="main-row-text">
            <h1>Music for everyone</h1>
            <p>Without music, life would be a mistake</p>
            <Link to={'/music-home'} className="btn">
              Start Listening
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
