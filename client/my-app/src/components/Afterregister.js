import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';        


export default function Afterregister (){
console.log("bivenido a afterregisterpage")
return(
<div className="container section">
    
        <Typography  className="container section text-alig center" variant="h5">
        Thank you for registering in MYtinerary 
        </Typography>
        <Typography  className="container section text-alig center" variant="h5">
         LOG IN TO CONTINUE
        </Typography>
        <div>
            <Link className="waves-effect waves-light btn-small col s3 offset-s2 container" to="/Login">
              <span className="content-text">log in</span></Link>
          </div>
        <Typography  className="container section" variant="body1">
        We hope you enjoy our application, and find your perfect trip
        </Typography>
   
</div>
);

}