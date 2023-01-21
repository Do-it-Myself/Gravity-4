import React, { useEffect, useState } from "react";
import "./Home.css";
import Table from "../../components/table/Table";
import Playbutton from "../../components/playbutton/Playbutton";
import Instructions from "../../components/instructions/Instructions";
import Endmodal from "../../components/endmodal/Endmodal";
import {CgArrowsVAlt} from "react-icons/cg";
import {GiAlliedStar} from "react-icons/gi";
import Switch from "../../components/switch/Switch"
import "./Darkmode.css"
import Board from "../../components/board/Board";


function Home(props) {
    const [flipped, setFlipped] = useState(false);
    const flip_board = () => {
        if (flipped === false){
            setFlipped(true);
        } else {
            setFlipped(false);
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
        <div className={`home-${theme}`}>
            
            <div className = "test">
                <button onClick = {toggle_theme}>Toggle Theme</button>
            </div>

            <div className = "darkmode-toggle">
                <Switch />
            </div>

            <div className={`game-info-${theme}`}>
                <h2>Gravity 4</h2>
                <p>A twist on the classic Connect 4</p>
            </div>

            <div className={`player-turn-${theme}`}>
                <h4>{props.player} turn</h4>
            </div>

            <div className ={`flipped-${flipped}`}>
                <Board />
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
                <button className="how-to-play-button"></button>
            </div>

            <div className="end">
                <Endmodal/>
            </div>
        </div>)
}

export default Home;
