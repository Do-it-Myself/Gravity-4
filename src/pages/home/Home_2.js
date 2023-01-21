import React, { useEffect, useState, createContext } from "react";
import "./Home.css";
import Playbutton from "../../components/playbutton/Playbutton";
import Instructions from "../../components/instructions/Instructions";
import Endmodal from "../../components/endmodal/Endmodal";
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
const GameContext = createContext();

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

function Home(props) {
  const [state, setState] = useState(initialState);
  const [cellMatrix, setCellMatrix] = useState([
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty"],
  ]);
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

  const [flipped, setFlipped] = useState(false);
  const flip_board = () => {
    if (flipped === false) {
      setFlipped(true);
    } else {
      setFlipped(false);
    }

    const myTimeout = setTimeout(flipToken, 1000);
  };

  function checkWinner(matrix) {
    let playerwin = [0, 0];
    playerwin = Horizontal(matrix, playerwin[0], playerwin[1]);
    playerwin = Vertical(matrix, playerwin[0], playerwin[1]);
    playerwin = RightDown(matrix, playerwin[0], playerwin[1]);
    playerwin = LeftDown(matrix, playerwin[0], playerwin[1]);

    if (playerwin[0] !== 0 || playerwin[1] !== 0) {
      if (playerwin[0] > playerwin[1]) {
        state.gameOver = true;
        state.winner = 1;
      } else if (playerwin[0] < playerwin[1]) {
        state.gameOver = true;
        state.winner = 2;
      } else {
        state.gameOver = true;
        state.winner = 0;
      }
      setState({ ...state });
      console.log(state.gameOver, state.winner);
    } else if (Full(matrix)) {
      state.gameOver = true;
      state.winner = 0;
      setState({ ...state });
    }
  }

  function playHandler(rowIndex, columnIndex) {
    console.log("Table", rowIndex, columnIndex, "State flipped", state.flipped);


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

  const [theme, setTheme] = useState("light");
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

  return (
    <GameContext.Provider
      value={[state, setState, cellMatrix, setCellMatrix, playHandler]}
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
          <h4>{props.player} turn</h4>
        </div>

        <div className={`flipped-${flipped}`}>
          <Board />
        </div>

        <div className="flip-button">
          <Playbutton
            icon={<CgArrowsVAlt size={24} />}
            button_text="Flip"
            function={flip_board}
          />
        </div>
        <br />
        <div className="play-button">
          <Playbutton icon={<GiAlliedStar size={24} />} button_text="Play" />
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

        <div className="end">
          <Endmodal />
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
