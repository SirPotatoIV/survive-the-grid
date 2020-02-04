import React,  {useContext} from 'react';
import "./style.css"

import Player from "../Player"
import useKeyboard from "../../hooks/useKeyboard"
import { DIMENSIONS } from "../../utils/constants"
import { GameContext } from '../../state/context';

// Takes in the grids size from the parent component App
function Grid(){
    
    // stores the players position in context
    const {state} = useContext(GameContext)
    console.log(state)
    // Starts the events that listen for keys being hit and results in the player moving
    useKeyboard()

    // renders the component
    return(
        // adds the player inside the grid
        // maps the tiles into the grid
        <div 
            className="grid" 
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${DIMENSIONS.GRIDSIZE}, ${DIMENSIONS.TILESIZE}px)`,
                gridTemplateRows: `repeat(${DIMENSIONS.GRIDSIZE}, ${DIMENSIONS.TILESIZE}px)`
             }}
        >
            { state.gridTiles.map((tile)=>{
                const columnStart = tile.location.x; 
                const columnEnd = columnStart + 1;
                const rowStart = tile.location.y
                const rowEnd = rowStart + 1;
            
                return(
                        <div 
                            key={tile.tileName}
                            className="tile"
                            style={{
                                gridColumnStart: `${columnStart}`,
                                gridColumnEnd: `${columnEnd}`,
                                gridRowStart:`${rowStart}`,
                                gridRowEnd: `${rowEnd}` 
                            }}
                        >
                            {tile.tileName}
                        </div>
                    )
            })}
            <Player pos = {state.player.position} />
        </div>
    )
}
export default Grid;