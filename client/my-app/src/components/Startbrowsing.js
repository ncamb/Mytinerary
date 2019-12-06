import React, { Component } from 'react';
import imgcircright from '../img/circled-right-2.png';
import { Link } from 'react-router-dom';


class Startbrowsing extends Component{
render() {
    return (
      <div>
        <div className="container section.">
          <h5>Find your perfect trip, desingned by insiders who know and love their cities.</h5>
        </div>
        <div className="container">
          <div>
            <h3 className="grey-text text-darken-4"> Strat browsing</h3>
          </div>
          <div className="container">
          <Link to="/cities"> <img className="responsive-img " width="40%" src={imgcircright} alt="logo" /></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Startbrowsing