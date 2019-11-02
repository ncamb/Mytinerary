import React from 'react';
import imgcircright from '../img/circled-right-2.png';


function Imgcard(props) {
    return (
        <div className="row">
            <div className="col s12 m8">
                <div className="card">
                    <div className="card-image">
                        <img src={props.url} alt="city img" />
                    </div>
                    <div className="card-content">
                        <h6 className=" black-text">{props.name}</h6>
                    </div>
                </div>
            </div>
        </div>

    );
}

function Ly1() {
    return (
        <div className="carousel-item white">
            <div className="row">
                <div className=" col s6">
                    <Imgcard  url='https://www.vuelaviajes.com/wp-content/2018/10/Nueva-York.jpg' name="New York"/>
                </div>
                <div className=" col s6">
                    <Imgcard  url='https://www.vuelaviajes.com/wp-content/2018/10/Londres-UK.jpg' name="London"/>
                </div>
            </div>
            <div className="row">
                <div className=" col s6">
                    <Imgcard url='https://www.vuelaviajes.com/wp-content/2018/10/Paris.jpg'name='Paris'/>
                </div>
                <div className=" col s6">
                    <Imgcard url='https://www.vuelaviajes.com/wp-content/2018/10/Tokio.jpg'name='Tokio' />
                </div>
            </div>
        </div>
    );
}
function Ly2() {
    return (
        <div className="carousel-item white">
            <div className="row">
                <div className=" col s6">
                    <Imgcard  url='https://www.vuelaviajes.com/wp-content/2018/10/Hong-Kong.jpg' name="Hong Kong"/>
                </div>
                <div className=" col s6">
                    <Imgcard  url='https://www.vuelaviajes.com/wp-content/2018/10/Los-Angeles-1.jpg' name="Los Angeles"/>
                </div>
            </div>
            <div className="row">
                <div className=" col s6">
                    <Imgcard url='https://www.vuelaviajes.com/wp-content/2018/10/Singapur-1.jpg'name='Singapur'/>
                </div>
                <div className=" col s6">
                    <Imgcard url='https://www.vuelaviajes.com/wp-content/2018/10/Chicago.jpg'name='Chicago' />
                </div>
            </div>
        </div>
    );
}
function Ly3() {
    return (
        <div className="carousel-item white">
            <div className="row">
                <div className=" col s6">
                    <Imgcard  url='https://www.vuelaviajes.com/wp-content/2018/10/Pekin.jpg' name="Pekin"/>
                </div>
                <div className=" col s6">
                    <Imgcard  url='https://www.vuelaviajes.com/wp-content/2018/10/Bruselas.jpg' name="Bruselas"/>
                </div>
            </div>
            <div className="row">
                <div className=" col s6">
                    <Imgcard url='https://www.vuelaviajes.com/wp-content/2019/08/Bangkok-ciudad.jpg'name='Bangkok'/>
                </div>
                <div className=" col s6">
                    <Imgcard url='https://www.vuelaviajes.com/wp-content/2019/08/Atenas.jpg'name='Atenas' />
                </div>
            </div>
        </div>
    );
}
function Carrousel() {
    return (

        <div className="carousel carousel-slider center">
                <Ly1 />
                <Ly2 />
                <Ly3 />
        </div>
    );
}

function Landpbody2() {
    return (
        <div className="center-align container">
            <div className="container section.">
                <h6>Find your perfect trip, desingned by insiders who know and love their cities.</h6>
            </div>
            <div className="container">
                <img className="responsive-img " width="30%" src={imgcircright} alt="logo" />
            </div>
            <div>
                <h5 className="left-align">Popular Mytineraries</h5>

            </div>
            <Carrousel />




        </div>
    );

}

export default Landpbody2