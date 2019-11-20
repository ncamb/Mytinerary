import React  from 'react';



export default function Activityimgcard(props) {
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