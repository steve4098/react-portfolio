import React from "react";
import '../css/index.css';

function jumbotron (props) {
    return(
        <div class="jumbotron jumbotron-fluid jumboBackground">
          <div class="container jumboCopy">
           <h1>Steve Butler</h1>      
           <p>This portfolio (made using React) shows some of the projects I have created in my coding career to date</p>
          </div>
        </div>
    )
}

export default jumbotron;