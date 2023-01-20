import React, { useState, createContext } from "react";
import Row from "./Row";

const GameContext = createContext();

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
};

function Table() {
  const [state, setState] = useState(initialState);

  function playHandler(rowIndex, columnIndex) {
    console.log("Table", rowIndex, columnIndex);

    const newState = state;
    if (newState.currentPlayerIs1) {
      newState.board[rowIndex][columnIndex] = 1;
    } else {
      newState.board[rowIndex][columnIndex] = 2;
    }
    newState.currentPlayerIs1 = !state.currentPlayerIs1;
    console.log(newState.currentPlayerIs1);

    setState(newState);
  }

  function RowMap(row, i) {
    return <Row key={i} row={row} rowIndex={i} playHandler={playHandler} />;
  }

  return (
    <GameContext.Provider value={{ state }}>
      <table>
        <tbody>{state.board.map(RowMap)}</tbody>
      </table>
    </GameContext.Provider>
  );
}

export default Table;

export { GameContext };
