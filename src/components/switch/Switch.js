import React from 'react';
import "./Switch.css";

function Switch(props){
    
    return(
        <div>
            <label class="switch">
            <input 
            type="checkbox"
            onClick = {() => {props.function()}}
             />
            <span class="slider round"></span>
            </label>
        </div>
    )
}

export default Switch;