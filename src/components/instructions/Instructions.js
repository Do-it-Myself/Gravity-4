import {React, useState} from 'react';
import './Instructions.css';
import {IoCloseSharp} from 'react-icons/io5';


function Instructions(props) {

    console.log(props.closeModal);
    return (
        <div>
            {props.closeModal && (
                <div className={`instructions-popup-${props.theme} instructions-popup`}>
                    <button onClick={() => props.setCloseModal(false)} className='close-button'>
                        <IoCloseSharp size={24}/>
                    </button>
                    <div className='instructions-text'>
                        <h3>How to play?</h3>
                        <div className='description'>
                            <ul>
                                <li>Same as Connect 4, the objective is to connect 4 tokens either horizontally, vertically, or diagonally.</li>
                                <li>But in Gravity 4, you can choose to flip the board instead of placing a token for your turn.</li>
                                <li>Hope your brain doesn't flip upside down playing Gravity 4!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Instructions;