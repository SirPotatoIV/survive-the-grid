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
                gridRowStart:`${pos.x}`,
                gridRowEnd: `${pos.x+1}`,
                gridColumnStart: `${pos.y}`,
                gridColumnEnd: `${pos.y+1}`,
                transform: `rotate(${pos.orientation}deg)`
            }} 
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