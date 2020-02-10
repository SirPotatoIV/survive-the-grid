import React from 'react';
import "./PlayerCard.css"
import tank from "../Player/tank.png"
import tank2 from "../Player/tank2.png"
import tank3 from "../Player/tank3.png"
import tank4 from "../Player/tank4.png"
// import {GameContext} from "../../state/context"

function PlayerCard(props){
    const images = {tank, tank2, tank3, tank4}

    const player = props.player
    // return useMemo(() =>
    // {
        return(<div className = "PlayerCards">
                    <h3>{player.name}</h3>
                    <div
                        style={{
                            transform: `translate(0%, 50%) rotate(90deg)`
                        }}
                    >
                        <img 
                            src = {images[player.imageString]}
                            alt = "player"
                            height = "auto"
                            width = "25px"
                        />
                    </div>
                    <div>Health:{player.health}</div>
                </div>
                )
    // },[player])
}
export default PlayerCard;