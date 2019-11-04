import React from 'react';

function Cities() {
    componentDidMount() {
        Console.log('Aca si')
    }
fetchcities(){
    fetch('/test')
        .then(res => res.json())
        .then(data => console.log(data));
}

    return (
        <div className="center-align container">
            <div className="container section.">
                <h4>Cities</h4>
            </div>
            <div className="container">
                <div>

                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cities