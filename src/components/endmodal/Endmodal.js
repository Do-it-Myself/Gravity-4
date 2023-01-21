import {React, useState} from 'react';
import './Instructions.css';

function Endmodal(props) {
    const[closeModal, setCloseModal] = useState(true);

    return (
        <div>
            {closeModal && (
                <div className='instructions-popup'>
                    <button onClick={() => setCloseModal(false)} className='close-button'>
                        <IoCloseSharp size={24}/>
                    </button>
                    <div className='instructions-text'>
                        <h3>How to play?</h3>
                        <div className='description'>
                            <ul>
                                <li>Same as Connect 4, the objective is to connect 4 tokens either horizontally, vertically, or diagonally.</li>
                                <li>But in Gravity 4, you can either place a token or flip the board for your turn.</li>
                                <li>Enjoy the game and experience a whole new dimension!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Endmodal;