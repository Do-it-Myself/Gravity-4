import React from 'react';

function Button(props) {
    return (
        <div>
            <button 
            type = "button"
            onClick={() => console.log("Placeholder for button action")}>
            </button>
        </div>
    );
}

export default Button;