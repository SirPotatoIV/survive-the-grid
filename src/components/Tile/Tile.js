import React, {useContext, useMemo} from 'react';
import {GameContext} from "../../state/context"
import "./style.css"

function Tile({children, style, tileName}){

    const {state} = useContext(GameContext)
    const tile = state.tileTracker[tileName]
    
    return useMemo(()=>{
        return(<div className = "tile"
            style = {style}
        >
            {children}
        </div>)
    }, [tile])
}
export default Tile;