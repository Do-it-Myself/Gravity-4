import {React, useState} from 'react';
import './Board.css';

const initialState = {
  player1: 1,
  player2: 2,
  currentPlayerIs1: true,
  board: [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],   
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ],
  gameOver: false,
  winner: null,
};

function Horizontal(matrix, player1win, player2win) {
  let count = 0;
  let player = 0;
  for (let r = 6; r >= 0; r--) {
    for (let c = 0; c < 7; c++) {
      if (matrix[r][c] === 0) {
        count = 0;
      } else if (matrix[r][c] === player) {
        count += 1;
      } else {
        count = 1;
      }
      player = matrix[r][c];

      if (count >= 4) {
        if (matrix[r][c] === 1) {
          player1win += 1;
        } else {
          player2win += 1;
        }
      }
    }
  }
  return [player1win, player2win];
}

function Vertical(matrix, player1win, player2win) {
  let count = 0;
  let player = 0;
  for (let c = 0; c < 7; c++) {
    for (let r = 6; r >= 0; r--) {
      if (matrix[r][c] === 0) {
        count = 0;
      } else if (matrix[r][c] === player) {
        count += 1;
      } else {
        count = 1;
      }
      player = matrix[r][c];

      if (count >= 4) {
        if (matrix[r][c] === 1) {
          player1win += 1;
        } else {
          player2win += 1;
        }
      }
    }
  }
  return [player1win, player2win];
}

function RightDown(matrix, player1win, player2win) {
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (r + 4 > 7 || c + 4 > 7) {
        break;
      } else if (matrix[r][c] === 1) {
        if (
          matrix[r + 1][c + 1] === 1 &&
          matrix[r + 2][c + 2] === 1 &&
          matrix[r + 3][c + 3] === 1
        ) {
          player1win += 1;
        }
      } else if (matrix[r][c] === 2) {
        if (
          matrix[r + 1][c + 1] === 2 &&
          matrix[r + 2][c + 2] === 2 &&
          matrix[r + 3][c + 3] === 2
        ) {
          player2win += 1;
        }
      }
    }
  }
  return [player1win, player2win];
}

function LeftDown(matrix, player1win, player2win) {
  for (let r = 0; r < 7; r++) {
    for (let c = 6; c >= 0; c--) {
      if (r + 4 > 7 || c < 3) {
        break;
      } else if (matrix[r][c] === 1) {
        if (
          matrix[r + 1][c - 1] === 1 &&
          matrix[r + 2][c - 2] === 1 &&
          matrix[r + 3][c - 3] === 1
        ) {
          player1win += 1;
        }
      } else if (matrix[r][c] === 2) {
        if (
          matrix[r + 1][c - 1] === 2 &&
          matrix[r + 2][c - 2] === 2 &&
          matrix[r + 3][c - 3] === 2
        ) {
          player1win += 2;
        }
      }
    }
  }
  console.log([player1win, player2win]);
  return [player1win, player2win];
}

function Board(props) {
    const [state, setState] = useState(initialState);

    const [cellMatrix, setCellMatrix] = useState([
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty",],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty",],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty",],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty",],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty",],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty",],
        ["empty", "empty", "empty", "empty", "empty", "empty", "empty",]
    ]);
    
    function checkWinner(matrix) {
        let playerwin = [0, 0];
        playerwin = Horizontal(matrix, playerwin[0], playerwin[1]);
        playerwin = Vertical(matrix, playerwin[0], playerwin[1]);
        playerwin = RightDown(matrix, playerwin[0], playerwin[1]);
        playerwin = LeftDown(matrix, playerwin[0], playerwin[1]);
    
        if (playerwin[0] !== 0 || playerwin[1] !== 0) {
          if (playerwin[0] > playerwin[1]) {
            console.log("1 win");
            state.gameOver = true;
            state.winner = 1;
          } else if (playerwin[0] < playerwin[1]) {
            console.log("2 win");
            state.gameOver = true;
            state.winner = 2;
          } else {
            console.log("Draw");
            state.gameOver = true;
            state.winner = 0;
          }
          setState({ ...state });
          console.log(state.gameOver, state.winner)
        }
    }

    function flip() {
        if (state.flipped) {
            for (let c = 0; c < 7; c++) {
                const column = state.board.map((x) => x[c]);
                let lastFilled = -1;
                for (let r = 6; r >= 0; r--) {
                if (column[r] !== 0) {
                    lastFilled = r;
                    break;
                }
            }
            if (lastFilled !== -1) {
                let newColumn = [0, 0, 0, 0, 0, 0, 0];
                const shift = 6 - lastFilled;
                for (let r = 6; r >= shift; r--) {
                    newColumn[r] = column[r - shift];
                }
                for (let r = 0; r < 7; r++) {
                    state.board[r][c] = newColumn[r];
                }
            }
            state.flipped = false;
            }
        } else {
            for (let c = 0; c < 7; c++) {
                const column = state.board.map((x) => x[c]);
                let lastFilled = 7;
                for (let r = 0; r < 7; r++) {
                if (column[r] !== 0) {
                    lastFilled = r;
                    break;
                }
                }
                if (lastFilled !== 7) {
                    let newColumn = [0, 0, 0, 0, 0, 0, 0];
                    for (let r = 0; r < 7 - lastFilled; r++) {
                        newColumn[r] = column[r + lastFilled];
                    }
                    for (let r = 0; r < 7; r++) {
                        state.board[r][c] = newColumn[r];
                    }
                }
            }
            state.flipped = true;
        }
        setState({ ...state });
        checkWinner(state.board);
      }


    function playHandler(rowIndex, columnIndex) {
        console.log("Table", rowIndex, columnIndex);
        
        const column = state.board.map((x) => x[columnIndex]);
        if (state.flipped) {
            for (let i = 6; i >= 0; i--) {
                if (column[i] === 0) {
                    if (state.currentPlayerIs1) {
                        state.board[i][columnIndex] = 1;      
                        cellMatrix[i][columnIndex] = "circle-red"
                    } else {
                        state.board[i][columnIndex] = 2;
                        cellMatrix[i][columnIndex] = "circle-green"
                    }
                    state.currentPlayerIs1 = !state.currentPlayerIs1;
                    setState({...state});
                    setCellMatrix({...cellMatrix});
    
                    console.log("matrix", cellMatrix);
                    console.log("real state", initialState.board);
    
                    break;
                }
            } 
        } else {
            for (let i = 6; i >= 0; i--) {
                if (column[i] === 0) {
                    if (state.currentPlayerIs1) {
                        state.board[i][columnIndex] = 1;      
                        cellMatrix[i][columnIndex] = "circle-red"
                    } else {
                        state.board[i][columnIndex] = 2;
                        cellMatrix[i][columnIndex] = "circle-green"
                    }
                    state.currentPlayerIs1 = !state.currentPlayerIs1;
                    setState({...state});
                    setCellMatrix({...cellMatrix});
    
                    console.log("matrix", cellMatrix);
                    console.log("real state", initialState.board);
    
                    break;
                }
            }
        }
        
        
        console.log(state.board, state.currentPlayerIs1);
        checkWinner(state.board);
    }

    return (
        <div>
            <div id='connect4' className='board-container'>
                <table>
                    <tbody>
                        <tr className='cell-row'>
                            <td onClick={() => playHandler(0, 0)} className='cell-0-0 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[0][0]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(0, 1)} className='cell-0-1 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[0][1]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(0, 2)} className='cell-0-2 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[0][2]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(0, 3)} className='cell-0-3 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[0][3]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(0, 4)} className='cell-0-4 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[0][4]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(0, 5)} className='cell-0-5 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[0][5]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(0, 6)} className='cell-0-6 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[0][6]}/>
                                    </svg>
                                </span>
                            </td> 
                        </tr>
                        <tr className='cell-row'>
                            <td onClick={() => playHandler(1, 0)} className='cell-1-0 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[1][0]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(1, 1)} className='cell-1-1 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[1][1]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(1, 2)} className='cell-1-2 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[1][2]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(1, 3)} className='cell-1-3 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[1][3]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(1, 4)} className='cell-1-4 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[1][4]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(1, 5)} className='cell-1-5 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[1][5]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(1, 6)} className='cell-1-6 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[1][6]}/>
                                    </svg>
                                </span>
                            </td> 
                        </tr>
                        <tr className='cell-row'>
                            <td onClick={() => playHandler(2, 0)} className='cell-2-0 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[2][0]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(2, 1)} className='cell-2-1 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[2][1]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(2, 2)} className='cell-2-2 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[2][2]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(2, 3)} className='cell-2-3 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[2][3]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(2, 4)} className='cell-2-4 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[2][4]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(2, 5)} className='cell-2-5 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[2][5]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(2, 6)} className='cell-2-6 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[2][6]}/>
                                    </svg>
                                </span>
                            </td>  
                        </tr>
                        <tr className='cell-row'>
                            <td onClick={() => playHandler(3, 0)} className='cell-3-0 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[3][0]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(3, 1)} className='cell-3-1 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[3][1]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(3, 2)} className='cell-3-2 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[3][2]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(3, 3)} className='cell-3-3 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[3][3]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(3, 4)} className='cell-3-4 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[3][4]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(3, 5)} className='cell-3-5 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[3][5]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(3, 6)} className='cell-3-6 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[3][6]}/>
                                    </svg>
                                </span>
                            </td> 
                        </tr>
                        <tr className='cell-row'>
                            <td onClick={() => playHandler(4, 0)} className='cell-4-0 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[4][0]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(4, 1)} className='cell-4-1 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[4][1]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(4, 2)} className='cell-4-2 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[4][2]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(4, 3)} className='cell-4-3 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[4][3]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(4, 4)} className='cell-4-4 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[4][4]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(4, 5)} className='cell-4-5 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[4][5]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(4, 6)} className='cell-4-6 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[4][6]}/>
                                    </svg>
                                </span>
                            </td> 
                        </tr>
                        <tr className='cell-row'>
                            <td onClick={() => playHandler(5, 0)} className='cell-5-0 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[5][0]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(5, 1)} className='cell-5-1 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[5][1]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(5, 2)} className='cell-5-2 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[5][2]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(5, 3)} className='cell-5-3 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[5][3]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(5, 4)} className='cell-5-4 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[5][4]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(5, 5)} className='cell-5-5 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[5][5]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(5, 6)} className='cell-5-6 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[5][6]}/>
                                    </svg>
                                </span>
                            </td> 
                        </tr>
                        <tr className='cell-row'>
                            <td onClick={() => playHandler(6, 0)} className='cell-6-0 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[6][0]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(6, 1)} className='cell-6-1 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[6][1]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(6, 2)} className='cell-6-2 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[6][2]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(6, 3)} className='cell-6-3 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[6][3]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(6, 4)} className='cell-6-4 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[6][4]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(6, 5)} className='cell-6-5 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[6][5]}/>
                                    </svg>
                                </span>
                            </td> 
                            <td onClick={() => playHandler(6, 6)} className='cell-6-6 selectable'>
                                <span className='chip-position'>
                                    <svg viewBox='0 0 100 100' className='animated'>
                                        <circle cx='50' cy='50' r='50' className={cellMatrix[6][6]}/>
                                    </svg>
                                </span>
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Board;