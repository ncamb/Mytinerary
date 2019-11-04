import React from 'react';
import imgcircright from '../img/circled-right-2.png';

function Startbrowing() {
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
        <a href="/cities"> <img className="responsive-img " width="40%" src={imgcircright} alt="logo" /></a>
        </div>
      </div>
    </div>
  );
}

function Logcreate() {
  return (
    <div>
      <div>
        <h5>Want to build your own MYtinerary?</h5>
      </div>
      <div className="row section">
        <div>
          <a className="waves-effect waves-light btn-small col s3 offset-s2" href="/Login">
            <span className="content-text">log in</span></a>
        </div>
        <div>
          <a className="waves-effect waves-light btn-small col s3 offset-s2" href="/Createaccount">
            <span className="content-text">Create a Account</span></a>
        </div>
      </div>
    </div>
  );
}


function Landpagebody() {
  return (
    <div className="center-align container">
      <Startbrowing />
      <Logcreate />
    </div >
  );
}

export default Landpagebody