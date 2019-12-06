import React, { Component } from 'react';
import imgheader from '../img/MYtineraryLogo.png';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/useraction';
import { Link } from 'react-router-dom';

class Header extends Component {


  render() {
    return (
      <div>
        <header>
          <div className="white">
            <Link to="#" className="btn-floating btn-small grey dropdown-trigger" data-target="dropdown1"> <i className="material-icons">account_circle</i></Link>
          </div>

          {this.props.isAuthenticated ? (
            <ul id="dropdown1" className="dropdown-content">
              <li><a onClick={this.props.logout} >Logout</a> </li>
              
            </ul>
          ) :
            <ul id="dropdown1" className="dropdown-content">
              <li><Link to="/Login">Login</Link> </li>
              <li><Link to="/Createaccount">Create a Account</Link></li>
            </ul>}

          <div className="center-align">
            <img src={imgheader} className="responsive-img" width="90%" alt="logo" />
          </div>
        </header>
      </div>
    );

  }
}


const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(
  mapStateToProps,{logout}
)(Header);

