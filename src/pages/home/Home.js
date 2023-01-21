import React, { useEffect, useState } from "react";
import "./Home.css";
import Table from "../../components/table/Table";
import Playbutton from "../../components/playbutton/Playbutton";
import Instructions from "../../components/instructions/Instructions";
import Endmodal from "../../components/endmodal/Endmodal";
import {CgArrowsVAlt} from "react-icons/cg";
import {GiAlliedStar} from "react-icons/gi";
import {BsFillQuestionCircleFill} from "react-icons/bs";
import Switch from "../../components/switch/Switch"
import "./Darkmode.css"
import Board from "../../components/board/Board";


function Home(props) {
    const [flipped, setFlipped] = useState("flipped_true");
    const flip_board = () => {
        if (flipped === "flipped_false"){
            setFlipped("flipped_true");
        } else {
            setFlipped("flipped_false");
        }
    }

    const [theme, setTheme] = useState("light");
    const toggle_theme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {document.body.className = theme;}, [theme]);

    return (
        <div className='home'>
            
            <div className = "test">
                <button onClick = {toggle_theme}>Toggle Theme</button>
            </div>

            <div className = "darkmode-toggle">
                <Switch />
            </div>

            <div className='game-info'>
                <h2>Gravity 4</h2>
                <p>A twist on the classic Connect 4</p>
            </div>

            <div className ={flipped}>
                <Board />
            </div>

            <div className='player-turn'>
                <h4>{props.player} turn</h4>
            </div>
            
            <div className='flip-button'>
                <Playbutton 
                icon={<CgArrowsVAlt size={24}/>} 
                button_text="Flip"
                function = {flip_board}/>
            </div>
            <br/>
            <div className='play-button'>
                <Playbutton  
                icon = {<GiAlliedStar size={24}/>}
                button_text="Play"/>
            </div>

            <div className="instructions">
                <Instructions/>
            </div>

            <div className="how-to-play">
                <button className="how-to-play-button"><span><BsFillQuestionCircleFill size={24}/></span></button>
            </div>

            <div className="end">
                <Endmodal/>
            </div>
        </div>)
}

export default Home;
