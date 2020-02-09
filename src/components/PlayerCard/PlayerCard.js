import React from 'react';
import "./PlayerCard.css"
// import {GameContext} from "../../state/context"

function PlayerCard(props){
    // const {state} = useContext(GameContext)

    const player = props.player
    // return useMemo(() =>
    // {
        return(<div className = "PlayerCards">
                  <h3>{player.name}</h3>
                  <div>Health:{player.health}</div>
                </div>
                )
    // },[player])
}
export default PlayerCard;