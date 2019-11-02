import React from 'react';

function Member(props){
    return(
        <div className="conteiner section">
            {/* <h5 className="section">{props.name}</h5> */}
            <img className="responsive-img " src={props.url} alt={props.name}/>
         </div>
    );
}

function Members(){
    return(
        <div className="cocnteiner">
        <Member name="Anika Van de Berg" url='../img/Anika.png'/>
        <Member name="Luke Williams" url='../img/Luke.png'/>
        <Member name="Martin Wright" url='../img/Martin.png'/>
        <Member name="Sabrina MIller" url='../img/Sabrina.png'/>
        <Member name="Sai Patel" url='../img/Sai.png'/>
     </div>
    );
}

function ProjectTeam() {
    return (
        <div className="center-align container">
            <div className="container section.">
                <h4>ProjectTeam</h4>
            </div>  
            <Members/>
        </div>
    );
}
export default ProjectTeam