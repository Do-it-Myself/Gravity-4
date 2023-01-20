import React from 'react';
import './board.css';

function Board(props) {
    return (
        <div>
            <div className='board'>
                <table>
                    <tr className='cell-0-0 selectable'>
                        <td className='cell-0-0 selectable'></td> 
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Board;