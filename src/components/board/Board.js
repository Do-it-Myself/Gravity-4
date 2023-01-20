import React from 'react';
import './board.css';

function Board(props) {
    return (
        <div>
            <div id='connect4' className='board-container'>
                <table>
                    <tr className='cell-row'>
                        <td className='cell-0-0 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-0-1 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-0-2 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-0-3 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-0-4 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-0-5 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-0-6 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                    </tr>
                    <tr className='cell-row'>
                        <td className='cell-1-0 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-1-1 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-1-2 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-1-3 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-1-4 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-1-5 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-1-6 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                    </tr>
                    <tr className='cell-row'>
                        <td className='cell-2-0 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-2-1 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-2-2 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-2-3 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-2-4 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-2-5 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-2-6 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td>  
                    </tr>
                    <tr className='cell-row'>
                        <td className='cell-3-0 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-3-1 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-3-2 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-3-3 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-3-4 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-3-5 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-3-6 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                    </tr>
                    <tr className='cell-row'>
                        <td className='cell-4-0 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-4-1 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-4-2 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-4-3 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-4-4 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-4-5 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-4-6 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                    </tr>
                    <tr className='cell-row'>
                        <td className='cell-5-0 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-5-1 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-5-2 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-5-3 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-5-4 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-5-5 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-5-6 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                    </tr>
                    <tr className='cell-row'>
                        <td className='cell-6-0 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-6-1 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-6-2 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-6-3 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='circle-red'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-6-4 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='circle-green'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-6-5 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='circle-red'/>
                                </svg>
                            </span>
                        </td> 
                        <td className='cell-6-6 selectable'>
                            <span className='chip-position'>
                                <svg viewBox='0 0 100 100' className='animated'>
                                    <circle cx='50' cy='50' r='50' className='empty-slot'/>
                                </svg>
                            </span>
                        </td> 
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Board;