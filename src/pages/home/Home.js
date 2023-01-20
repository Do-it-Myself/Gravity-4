import React from 'react';
import './Home.css';

function Home(props) {
    return (
      <div className = "main page">
        <h1>Gravity 4</h1>
        <div className = "table">
          <Table />
        </div>
        <div className = "button">
          <Button />
        </div>
      </div>
    );
}

export default Home;
