import React from "react";
import "./Home.css";
import Table from "../../components/table/Table";
import Playbutton from "../../components/playbutton/Playbutton";
import {CgArrowsVAlt} from "react-icons/cg";
import {GiAlliedStar} from "react-icons/gi";

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
            
            <div className='flip-button'>
                <Playbutton 
                icon={<CgArrowsVAlt size={24}/>} 
                button_text="Flip"/>
            </div>
            <br/>
            <div className='play-button'>
                <Playbutton  
                icon = {<GiAlliedStar size={24}/>}
                button_text="Play"/>
            </div>
        </div>)
}

export default Home;
