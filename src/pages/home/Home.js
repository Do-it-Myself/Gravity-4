import React from "react";
import "./Home.css";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import Playbutton from "../../components/playbutton/Playbutton";
import {CgArrowsVAlt} from "react-icons/cg";

function Home(props) {
    return (
        <div className='home'>
            <div className='game-info'>
                <h2>Gravity 4</h2>
                <p>A twist on the classic Connect 4</p>
            </div>

            <div className='player-turn'>
                <h4>{props.player} turn</h4>
            </div>
            
<<<<<<< HEAD

=======
            <button 
            type = "button"
            className = "flip_button"
            onClick={() => console.log("Placeholder for button action")}>
                 Flip!
            </button>
>>>>>>> 6e6a5797781a125b79c5bc5c4e21169f409c09aa
            <div className='flip-button'>

            </div>
            <div className='play-button'>
              <Playbutton description="dasdsda"/>
                <Playbutton icon={<CgArrowsVAlt size={24}/>} description="diu"/>
            </div>
<<<<<<< HEAD
        </div>
    )
}
=======
        </div>)
}

>>>>>>> 6e6a5797781a125b79c5bc5c4e21169f409c09aa
export default Home;
