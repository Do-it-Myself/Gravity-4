import React, { useEffect, useState, createContext } from "react";
import "./Home.css";
import Playbutton from "../../components/playbutton/Playbutton";
import Instructions from "../../components/instructions/Instructions";
import { CgArrowsVAlt } from "react-icons/cg";
import { GiAlliedStar } from "react-icons/gi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Switch from "../../components/switch/Switch";
import Board from "../../components/board/Board_2";
import astronaut_green from "../../assets/green_astronaut.png";
import astronaut_red from "../../assets/red_astronaut.png";

console.log("board 2");

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
  flipped: false,
};

const initialCellMatrix = [
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
];

const GameContext = createContext();

function Horizontal(matrix, player1win, player2win, winSet) {
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
        for (let i = 0; i < 4; i++) {
          const r_idx = r.toString();
          const c_idx = (c - i).toString();
          winSet.add(r_idx + c_idx);
        }
        if (matrix[r][c] === 1) {
          player1win += 1;
        } else {
          player2win += 1;
        }
      }
    }
  }
  return [player1win, player2win, winSet];
}
function Vertical(matrix, player1win, player2win, winSet) {
  console.log("set", winSet);
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
        for (let i = 0; i < 4; i++) {
          const r_idx = (r + i).toString();
          const c_idx = c.toString();
          winSet.add(r_idx + c_idx);
        }
        if (matrix[r][c] === 1) {
          player1win += 1;
        } else {
          player2win += 1;
        }
      }
    }
  }
  return [player1win, player2win, winSet];
}
function RightDown(matrix, player1win, player2win, winSet) {
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (r + 4 > 7 || c + 4 > 7) {
        break;
      } else {
        if (matrix[r][c] === 1) {
          if (
            matrix[r + 1][c + 1] === 1 &&
            matrix[r + 2][c + 2] === 1 &&
            matrix[r + 3][c + 3] === 1
          ) {
            player1win += 1;
            console.log(r, c);
            for (let i = 0; i < 4; i++) {
              const r_idx = (r + i).toString();
              const c_idx = (c + i).toString();
              winSet.add(r_idx + c_idx);
            }
          }
        } else if (matrix[r][c] === 2) {
          if (
            matrix[r + 1][c + 1] === 2 &&
            matrix[r + 2][c + 2] === 2 &&
            matrix[r + 3][c + 3] === 2
          ) {
            player2win += 1;
            for (let i = 0; i < 4; i++) {
              const r_idx = (r + i).toString();
              const c_idx = (c + i).toString();
              winSet.add(r_idx + c_idx);
            }
          }
        }
      }
    }
  }
  return [player1win, player2win, winSet];
}
function LeftDown(matrix, player1win, player2win, winSet) {
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
          for (let i = 0; i < 4; i++) {
            const r_idx = (r + i).toString();
            const c_idx = (c - i).toString();
            winSet.add(r_idx + c_idx);
          }
        }
      } else if (matrix[r][c] === 2) {
        if (
          matrix[r + 1][c - 1] === 2 &&
          matrix[r + 2][c - 2] === 2 &&
          matrix[r + 3][c - 3] === 2
        ) {
          player1win += 2;
          for (let i = 0; i < 4; i++) {
            const r_idx = (r + i).toString();
            const c_idx = (c - i).toString();
            winSet.add(r_idx + c_idx);
          }
        }
      }
    }
  }
  return [player1win, player2win, winSet];
}
function Full(matrix) {
  let full = true;
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      if (matrix[r][c] === 0) {
        full = false;
        break;
      }
    }
  }
  return full;
}

function Home() {
  const [state, setState] = useState({ ...initialState });
  const [cellMatrix, setCellMatrix] = useState({ ...initialCellMatrix });

  // Flip token
  const [flipped, setFlipped] = useState(false);
  function flipToken() {
    // flip state
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
    state.currentPlayerIs1 = !state.currentPlayerIs1;
    setState({ ...state });
    checkWinner(state.board);

    // flip cellMatrix
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (state.board[r][c] === 0) {
          cellMatrix[r][c] = "empty";
        } else if (state.board[r][c] === 1) {
          cellMatrix[r][c] = "circle-red";
        } else {
          cellMatrix[r][c] = "circle-green";
        }
      }
    }

    setCellMatrix({ ...cellMatrix });
  }
  function flip_board() {
    if (flipped === false) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }

    setTimeout(flipToken, 1000);
  }

  // Check Winner
  function checkWinner(matrix) {
    let playerwin = [0, 0, new Set()];
    playerwin = Horizontal(matrix, playerwin[0], playerwin[1], playerwin[2]);
    playerwin = Vertical(matrix, playerwin[0], playerwin[1], playerwin[2]);
    playerwin = RightDown(matrix, playerwin[0], playerwin[1], playerwin[2]);
    playerwin = LeftDown(matrix, playerwin[0], playerwin[1], playerwin[2]);

    if (playerwin[0] !== 0 || playerwin[1] !== 0) {
      if (playerwin[0] > playerwin[1]) {
        state.gameOver = true;
        state.winner = "Red wins";
      } else if (playerwin[0] < playerwin[1]) {
        state.gameOver = true;
        state.winner = "Green wins";
      } else {
        state.gameOver = true;
        state.winner = "Draw";
      }
      setState({ ...state });
      console.log(state.gameOver, state.winner);
    } else if (Full(matrix)) {
      state.gameOver = true;
      state.winner = "Draw";
      setState({ ...state });
    }

    console.log(playerwin[2]);
  }

  // Play
  function playHandler(rowIndex, columnIndex) {
    if (!state.gameOver) {
      const column = state.board.map((x) => x[columnIndex]);
      if (state.flipped) {
        for (let i = 0; i < 7; i++) {
          if (column[i] === 0) {
            if (state.currentPlayerIs1) {
              state.board[i][columnIndex] = 1;
              cellMatrix[i][columnIndex] = "circle-red";
            } else {
              state.board[i][columnIndex] = 2;
              cellMatrix[i][columnIndex] = "circle-green";
            }
            state.currentPlayerIs1 = !state.currentPlayerIs1;
            setState({ ...state });
            setCellMatrix({ ...cellMatrix });

            break;
          }
        }
      } else {
        for (let i = 6; i >= 0; i--) {
          if (column[i] === 0) {
            if (state.currentPlayerIs1) {
              state.board[i][columnIndex] = 1;
              cellMatrix[i][columnIndex] = "circle-red";
            } else {
              state.board[i][columnIndex] = 2;
              cellMatrix[i][columnIndex] = "circle-green";
            }
            state.currentPlayerIs1 = !state.currentPlayerIs1;
            setState({ ...state });
            setCellMatrix({ ...cellMatrix });
            break;
          }
        }
      }
      checkWinner(state.board);
    }
  }

  // Theme
  const [theme, setTheme] = useState("dark");
  const toggle_theme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Reset
  function reset() {
    setState({
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
      flipped: false,
    });
    setCellMatrix([
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
      ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ]);
    console.log("reset");

    setFlipped(false);
  }

  return (
    <GameContext.Provider
      value={[state, setState, cellMatrix, setCellMatrix, playHandler, theme]}
    >
      <div className={`home-${theme} home`}>
        <div className="darkmode-toggle">
          <Switch function={toggle_theme} />
        </div>

        <div className={`game-info-${theme} game-info`}>
          <h2>Gravity 4</h2>
          <p>A twist on the classic Connect 4</p>
        </div>

        <div className={`player-turn-${theme}`}>
          {state.gameOver ? (
            <h4>{state.winner}!</h4>
          ) : (
            <h4>{state.currentPlayerIs1 ? "Red's " : "Green's"} turn</h4>
          )}
        </div>

        <div className={`flipped-${flipped}`}>
          <Board />
        </div>

        <div className="flip-button">
          {state.gameOver ? (
            <Playbutton
              icon={<GiAlliedStar size={24} />}
              button_text="Play Again"
              function={reset}
            />
          ) : (
            <Playbutton
              icon={<CgArrowsVAlt size={24} />}
              button_text="Flip"
              function={flip_board}
            />
          )}
        </div>

        <div className="instructions">
          <Instructions />
        </div>

        <div className="how-to-play">
          <button className="how-to-play-button">
            <span>
              <BsFillQuestionCircleFill size={24} />
            </span>
          </button>
        </div>

        <div className="astronaut astronaut-red">
          <img src={astronaut_red}></img>
        </div>
        <div className="astronaut astronaut-green">
          <img src={astronaut_green}></img>
        </div>
      </div>
    </GameContext.Provider>
  );
}
export default Home;
export { GameContext };
