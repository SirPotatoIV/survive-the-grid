import React from 'react';
import "./style.css"
import tank from "./tank.png"
import tank2 from "./tank2.png"
import tank3 from "./tank3.png"
import tank4 from "./tank4.png"
// import {GameContext} from "../../state/context"

function Player(props){
    // state, gameContext, and useMemo are still in code in case I switch back to this method of accessing player info. Right now it
    // ... is causing issues with rendering in spectator mode.
    const images = {tank, tank2, tank3, tank4}
    // const {state} = useContext(GameContext)
    // const player = state.players[props.playerName]
    const player = props.player
    
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
                        src = {images[player.imageString]}
                        alt = "player"
                        height = "auto"
                        width = "48px"
                    />
                </div>
                )
    // },[player])
}
export default Player;