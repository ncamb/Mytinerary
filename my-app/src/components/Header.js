import React from 'react';
import imgheader from '../img/MYtineraryLogo.png';


function NavBar() {

  return (
    <div className="white">
      <a href="#" className="btn-floating btn-small grey pulse dropdown-trigger" data-target="dropdown1"> <i className="material-icons">account_circle</i></a>
    </div>

  );
}

function Header() {
  return (
    <div>
      <NavBar />
      <ul id="dropdown1" className="dropdown-content">
        <li><a href="/Login">Login</a> </li>
        <li><a href="/Createaccount">Create a Account</a></li>
        <li className="divider"></li>
        <li><a href="/Landpbody2">Lading page 2</a></li>
        <li><a href="/ProjectTeam">Project Team  </a></li>
      </ul>
      <header className="center-align">
        <img src={imgheader} className="responsive-img" width="90%" alt="logo" />
      </header>
    </div>
  );

}
export default Header
