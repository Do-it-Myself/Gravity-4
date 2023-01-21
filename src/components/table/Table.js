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

function Table() {
  const [state, setState] = useState(initialState);

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

  function playHandler(rowIndex, columnIndex) {
    console.log("Table", rowIndex, columnIndex);

    const column = state.board.map((x) => x[columnIndex]);
    for (let i = 6; i >= 0; i--) {
      if (column[i] === 0) {
        if (state.currentPlayerIs1) {
          state.board[i][columnIndex] = 1;
        } else {
          state.board[i][columnIndex] = 2;
        }
        state.currentPlayerIs1 = !state.currentPlayerIs1;
        setState({ ...state });

        break;
      }
    }

    console.log(state.board, state.currentPlayerIs1);
    checkWinner(state.board);
  }

  function RowMap(row, i) {
    return <Row key={i} row={row} rowIndex={i} playHandler={playHandler} />;
  }

  return (
    <GameContext.Provider value={state}>
      <table>
        <tbody>{state.board.map(RowMap)}</tbody>
      </table>
    </GameContext.Provider>
  );
}

export default Table;

export { GameContext };
