import React from 'react';
import {CgArrowsVAlt} from "react-icons/cg";
import "./playbutton.css";

function Playbutton(props) {
    return (
        <div>
            <button className="game-buttons" type='button'>
                <div className='button-inner'>
                    {props.icon}
                    <p>{props.description}</p>
                </div>
            </button>
        </div>
    );
}

export default Playbutton;