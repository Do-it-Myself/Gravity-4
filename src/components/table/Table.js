import React, { useReducer, createContext } from "react";
import Row from "./Row";

const GameContext = createContext()

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
  dispatchTest: true,
};

function Table() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    const newState = state;
    newState.board[action.rowIndex][action.columnIndex] = 1;
    return newState;
  }

  function playHandler(rowIndex, columnIndex) {
    console.log("Table", rowIndex, columnIndex);
    dispatch({ rowIndex: rowIndex, columnIndex: columnIndex });
  }

  function RowMap(row, i) {
    return <Row key={i} row={row} rowIndex={i} playHandler={playHandler} />;
  }

  return (
    <GameContext.Provider value={{state, playHandler}}>
      <table>
        <tbody>
          {state.board.map(RowMap)}
        </tbody>
      </table>
    </GameContext.Provider>
  );
}

export default Table;

export {GameContext};