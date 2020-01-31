import React,  {useContext, useEffect, useState} from 'react';
import "./style.css"

import Player from "../Player"
import useKeyboard from "../../hooks/useKeyboard"
import { GameContext } from '../../state/context';

function Grid({gridSize}){
    
    const [tiles, setTiles] = useState([])
    const [tileElements, setTileElements] = useState([])
    const {position} = useContext(GameContext)

    useKeyboard()

    useEffect(()=>{
       
        let createdTiles = [];
        // write loop to create gridSize * gridSize objects that will represent tiles
        let x = 0;
        for(let i=0; i <= gridSize; i++){
            for(let j=0; j <= gridSize; j++){
                const tileName = `x${i}y${j}`
                const tileLocation = [i,j];
                const newTile = {
                    tileName,
                    location: tileLocation,
                    isObstruction: false
                }
                createdTiles[x] = newTile
                x++;
            }
        }
        setTiles(createdTiles)
        
    }, [])

    return(
        <div 
            className="grid" 
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, auto )`,
                gridTemplateRows: `repeat(${gridSize}, auto )`
             }}
        >
            { tiles.map((tile)=>{
            const columnStart = tile.location[0]; 
            const columnEnd = columnStart + 1;
            const rowStart = tile.location[1]
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