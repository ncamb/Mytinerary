import React, { Component } from 'react';
import Startbrowing from './Startbrowsing';
import Logcreate from './Logcreate';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Landpagebody extends Component{

  static propTypes = {
        isAuthenticated: PropTypes.bool
  };





render(){ 
  return (
    <div className="center-align container">
      <Startbrowing />
      {this.props.isAuthenticated ? (
                    null
                  ) : <Logcreate />}
      
    </div >
  );
}
}
const mapStateToProps = state => ({
   isAuthenticated: state.user.isAuthenticated
});

export default connect(
  mapStateToProps,
  )(Landpagebody); 