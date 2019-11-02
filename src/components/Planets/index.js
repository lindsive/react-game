import React from "react";
import "./style.css";

function Planets(props) {
    return (
      
        <div className="container">
            <img id={props.id} alt={props.name} src={props.image} />

        </div>
        
    );
};

export default Planets;

