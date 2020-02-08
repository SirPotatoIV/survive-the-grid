import React, {useContext} from 'react';
import "./style.css"
import playerImage from "./tank.png"
import {GameContext} from "../../state/context"

function Player(props){
    const {state} = useContext(GameContext)
    const player = state.players[props.playerName]
    // return useMemo(() =>
    // {
        return(<div   
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
    // },[player])
}
export default Player;