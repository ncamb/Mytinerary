import React from 'react';
import imgfooter from '../img/homeIcon.png';
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <footer className="page-footers white ">
            <div className="center-align section">
                <Link to="/"><img className="responsive-img" width="10%" src={imgfooter} alt="logo" /></Link>
            </div>
            <div className="footer-copyright grey lighten-5">
                <div className="container grey-text">
                    © 2019 Copyright
            <Link className="grey-text  right" to="/ProjectTeam">Project Team </Link> 
                </div>
            </div>
        </footer>
    );
}
export default Footer