import React from 'react';
import {CgArrowsVAlt} from "react-icons/cg";
import "./playbutton.css";

function Playbutton(props) {
    return (
        <div>
            <button type='button' >
                <CgArrowsVAlt></CgArrowsVAlt>
                <p>Play</p>
            </button>
        </div>
    );
}

export default Playbutton;