import React, { Component } from 'react';
import imgheader from '../img/MYtineraryLogo.png';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/useraction';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';


class Header extends Component {



  render() {
    const { user } = this.props.imgavatar
    // console.log(user.imgurl)
    return (
      <div>
        <header>


          <div className="  container section">
            <Link to="#" className="btn-floating grey dropdown-trigger" data-target="dropdown1"><Avatar alt="Remy Sharp" src={this.props.isAuthenticated ? (user.imgurl) : ("https://img2.freepng.es/20181205/ppu/kisspng-vector-graphics-computer-icons-user-profile-portab-writer-recommend-svg-png-icon-free-download-9768-5c0851b175d215.4257304515440490734826.jpg")} >
            </Avatar></Link>



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
  isAuthenticated: state.user.isAuthenticated,
  imgavatar: state.user
});

export default connect(
  mapStateToProps, { logout }
)(Header);

