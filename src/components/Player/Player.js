import React, {useContext} from 'react';
import "./style.css"
import playerImage from "./tank.png"
import {GameContext} from "../../state/context"

function Player(){
    
    const {state} = useContext(GameContext)
    const pos = state.player.position
    
    return(
        <div   
            style={{
                gridRowStart:`${pos.y}`,
                gridRowEnd: `${pos.y+1}`,
                gridColumnStart: `${pos.x}`,
                gridColumnEnd: `${pos.x+1}`,
                transform: `rotate(${pos.orientation}deg)`
            }} 
            className="player"
        >
            <img 
                src = {playerImage}
                alt = "player"
                height = "auto"
                width = "50px"
            />
        </div>
    )
}
export default Player;