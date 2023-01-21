import {React, useState} from "react";
import "./Dummy.css";
import Table from "../../components/table/Table";
import Board from "../../components/board/Board";
import Playbutton from "../../components/playbutton/Playbutton";
import Instructions from "../../components/instructions/Instructions";
import Endmodal from "../../components/endmodal/Endmodal";
import {CgArrowsVAlt} from "react-icons/cg";
import {GiAlliedStar} from "react-icons/gi";
import {BsFillQuestionCircleFill} from "react-icons/bs";

function Dummy(props) {
    const [flipped, setFlipped] = useState("flipped_true");
    const flip_board = () => {
        if (flipped === "flipped_false"){
            setFlipped("flipped_true");
        } else {
            setFlipped("flipped_false");
        }
    }

    return (
        <div className='home'>
            <div className='game-info-dummy'>
                <h2>Gravity 4</h2>
                <p>A twist on the classic Connect 4</p>
            </div>

            <div className='player-turn'>
                <h4>{props.player} turn</h4>
            </div>

            <div className='board'>
                <Board/>
            </div>
            
            <div className='flip-button'>
                <Playbutton 
                icon={<CgArrowsVAlt size={24}/>} 
                button_text="Flip"
                function = {flip_board}
                />
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

export default Dummy;
