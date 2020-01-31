import React,  {useContext, useEffect, useState} from 'react';
import "./style.css"

import Player from "../Player"
import useKeyboard from "../../hooks/useKeyboard"
import { GameContext } from '../../state/context';

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
        // used to store tiles as they are created
        let createdTiles = [];
        // loop to create gridSize * gridSize objects that will represent tiles
        let x = 0;
        // outer loop for x direction tiling
        for(let i=0; i <= gridSize; i++){
            // inner loop for y direction tiling
            for(let j=0; j <= gridSize; j++){
                // create the name of the tile to use for reference in future code ... possibly
                const tileName = `x${i}y${j}`
                // used for figuring out the tiles location
                const tileLocation = 
                {
                    x: i,
                    y: j
                };
                // stores created variables into an object, which will be stored in createdTiles
                const newTile = {
                    tileName,
                    location: tileLocation,
                    isObstruction: false
                }
                // stores new tile in createdTiles
                createdTiles[x] = newTile
                x++;
            }
        }
        // updates the tile state
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
                gridTemplateColumns: `repeat(${gridSize}, auto )`,
                gridTemplateRows: `repeat(${gridSize}, auto )`
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