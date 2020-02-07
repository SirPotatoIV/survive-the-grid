import React, {useContext} from 'react';
import "./style.css"
import playerImage from "./tank.png"
import {GameContext} from "../../state/context"

function Player(){
    
    const {state} = useContext(GameContext)
    const player = state.players.main
    
    return(
        <div   
            style={{
                gridRowStart:`${player.y}`,
                gridRowEnd: `${player.y+1}`,
                gridColumnStart: `${player.x}`,
                gridColumnEnd: `${player.x+1}`,
                transform: `rotate(${player.orientation}deg)`
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