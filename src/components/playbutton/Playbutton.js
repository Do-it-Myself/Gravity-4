import React from 'react';
import "./playbutton.css";

function Playbutton(props) {
    return (
        <div>
            <button className="game-buttons">
                <div className='button-inner'>
                    {props.icon}
                    <p>{props.button_text}</p>
                </div>
            </button>
        </div>
    );
}

export default Playbutton;