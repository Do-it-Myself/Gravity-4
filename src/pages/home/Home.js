import React from "react";
import "./Home.css";

import Table from "../../components/table/Table";

function Home(props) {
  return (
    <div className="home">
      <div className="game-info">
        <h2>Gravity 4</h2>
        <p>A twist on the classic Connect 4</p>
      </div>

      <div className="player-turn">
        <h4>{props.player} turn</h4>
      </div>

      <div className="">
        <Table />
      </div>

      <div className="play-button"></div>
    </div>
  );
}

export default Home;
