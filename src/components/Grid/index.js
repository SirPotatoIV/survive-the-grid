import React,  {useContext, useEffect, useState} from 'react';
import "./style.css"

import Player from "../Player"
import useKeyboard from "../../hooks/useKeyboard"
import { DIMENSIONS } from "../../utils/constants"
import { GameContext } from '../../state/context';
import makeTiles from "../../grids/makeTiles"
import createState from "../../state/createState"

// Takes in the grids size from the parent component App
function Grid({gridSize}){
    
    // stores the tiles in a state
    const [tiles, setTiles] = useState([])
    // stores the players position in context
    const {position} = useContext(GameContext)

    // Starts the events that listen for keys being hit and results in the player moving
    useKeyboard()

    // I don't think this code needs to be in a useEffect, or if it even should be in a useEffect, but leaving it here for now
    useEffect(()=>{
        const createdTiles = makeTiles(gridSize)
        setTiles(createdTiles)
    }, [])

    // renders the component
    return(
        // creates the grid that the tiles are mapped inside of
        // adds the player inside the grid
        // maps the tiles into the grid
        <div 
            className="grid" 
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, ${DIMENSIONS.TILESIZE}px)`,
                gridTemplateRows: `repeat(${gridSize}, ${DIMENSIONS.TILESIZE}px)`
             }}
        >
            { tiles.map((tile)=>{
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
            <Player pos = {position} />
        </div>
    )
}
export default Grid;