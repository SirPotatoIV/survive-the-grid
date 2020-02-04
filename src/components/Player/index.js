import React from 'react';
import "./style.css"
import playerImage from "./tank.png"

function Player({pos}){
    return(
        <div   
            style={{
                gridRowStart:`${pos.x}`,
                gridRowEnd: `${pos.x+1}`,
                gridColumnStart: `${pos.y}`,
                gridColumnEnd: `${pos.y+1}`
            }} 
        >
            <img 
                src = {playerImage}
                alt = "player"
                height = "auto"
                width = "70px"
            />
        </div>
    )
}
export default Player;