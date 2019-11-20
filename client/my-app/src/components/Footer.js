import React from 'react';
import imgfooter from '../img/homeIcon.png';



function Footer() {
    return (
        <footer className="page-footers white ">
            <div className="center-align section">
                <a href="/"><img className="responsive-img" width="10%" src={imgfooter} alt="logo" /></a>
            </div>
            <div className="footer-copyright grey lighten-5">
                <div className="container grey-text">
                    © 2019 Copyright
            <a className="grey-text text-lighten-2 right" href="/Landpbody2">Lading page 2</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer