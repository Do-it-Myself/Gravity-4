import React, { useEffect, useState } from "react";
import "./Home.css";
import Table from "../../components/table/Table";
import Playbutton from "../../components/playbutton/Playbutton";
import {CgArrowsVAlt} from "react-icons/cg";
import {GiAlliedStar} from "react-icons/gi";
import Switch from "../../components/switch/Switch"
import "./Darkmode.css"

function Home(props) {
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
            
            <div ClassName = "test">
                <button onClick = {toggle_theme}>Toggle Theme</button>
            </div>

            <div className = "darkmode-toggle">
                <Switch />
            </div>

            <div className='game-info'>
                <h2>Gravity 4</h2>
                <p>A twist on the classic Connect 4</p>
            </div>

            <div className = "table">
                <Table />
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
