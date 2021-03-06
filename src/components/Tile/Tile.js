import React, {useContext} from 'react';
import {GameContext} from "../../state/context"
import "./style.css"

function Tile({children, style, tileName}){
    const {state} = useContext(GameContext)
    // used for checking for updates
    const tile = state.tileTracker[tileName]
    // return useMemo(()=>{
        return(<div className = "tile"
            style = {style}
        >
            {children}
            <span className="health">{tile.health}</span>
        </div>)
    // }, [tile])
}
export default Tile;