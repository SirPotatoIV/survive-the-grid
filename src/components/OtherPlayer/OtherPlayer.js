import React from 'react';
import playerImage from "./tank.png"
import "./OtherPlayer.css"

function OtherPlayer(props){
    
    const otherPlayerState = props.otherPlayerState
    console.log(props)
    return(
        <div   
            style={{
                gridRowStart:`${otherPlayerState.y}`,
                gridRowEnd: `${otherPlayerState.y+1}`,
                gridColumnStart: `${otherPlayerState.x}`,
                gridColumnEnd: `${otherPlayerState.x+1}`,
                transform: `rotate(${otherPlayerState.orientation}deg)`
            }} 
            className="projectile"
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
export default OtherPlayer;