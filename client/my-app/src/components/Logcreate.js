import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logcreate extends Component{
render() {
    return (
      <div>
        <div>
          <h5>Want to build your own MYtinerary?</h5>
        </div>
        <div className="row section">
          <div>
            <Link className="waves-effect waves-light btn-small col s3 offset-s2" to="/Login">
              <span className="content-text">log in</span></Link>
          </div>
          <div>
            <Link className="waves-effect waves-light btn-small col s3 offset-s2" to="/Createaccount">
              <span className="content-text">Create a Account</span></Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Logcreate