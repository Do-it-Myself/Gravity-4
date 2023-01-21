import {React, useState, useContext} from 'react';
import './Endmodal.css';
import { GameContext } from "../../pages/home/Home_2";

function Endmodal(props) {
    const state = useContext(GameContext)[0];
    const setState = useContext(GameContext)[1];
    const cellMatrix = useContext(GameContext)[2];
    const setCellMatrix = useContext(GameContext)[3];
    const playHandler = useContext(GameContext)[4];
    const reset = useContext(GameContext)[5];
    
    const[closeModal, setCloseModal] = useState(true);

    function playAgain() {
        reset();
        setCloseModal(false)
    }

    return (
        <div>
            {closeModal && (
                <div className='end-modal'>
                    <div className='winner'>
                        <h3>{state.winner}!</h3>
                    </div>
                    <button onClick={playAgain} className='play-again-button'>Play again</button>
                </div>
            )}
        </div>
    );
}

export default Endmodal;