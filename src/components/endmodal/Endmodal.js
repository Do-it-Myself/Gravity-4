import {React, useState} from 'react';
import './Endmodal.css';

function Endmodal(props) {
    const[closeModal, setCloseModal] = useState(true);

    return (
        <div>
            {closeModal && (
                <div className='end-modal'>
                    <div className='winner'>
                        <h3>{props.winner} Wins!</h3>
                    </div>
                    <button onClick={() => setCloseModal(false)} className='play-again-button'>Play again</button>
                </div>
            )}
        </div>
    );
}

export default Endmodal;