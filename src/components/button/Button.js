import React from 'react';
import {CgArrowsVAlt} from "react-icons/cg";
import "./button.css";

function Button(props) {
    return (
        <div>
            <button 
            type = "button"
            className = "flip_button"
            onClick={() => console.log("Placeholder for button action")}>
                <CgArrowsVAlt /> Flip!
            </button>
        </div>
    );
}

export default Button;