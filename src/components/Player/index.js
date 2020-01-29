import React from 'react';
import "./style.css"
import playerImage from "./player.png"

function Player({pos}){
    return(
        <div className="tile"   
            style={{
                gridRowStart:`${pos[0]}`,
                gridRowEnd: `${pos[0]+1}`,
                gridColumnStart: `${pos[1]}`,
                gridColumnEnd: `${pos[1]+1}`
            }} 
        >
            <img 
                src = {playerImage}
                alt = "player"
                height = "50px"
                width = "50px"
            />
        </div>
    )
}
export default Player;