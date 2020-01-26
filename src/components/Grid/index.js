import React, {useState, useEffect} from 'react';
import "./style.css"

// import Tile from "../Tile"
import Player from "../Player"

function Grid({gridSize}){
    
    const [tiles, setTiles] = useState([])
    const [tileElements, setTileElements] = useState([])

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

    useEffect(()=> {
        const tileElements = tiles.map((tile)=>{
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
        })
        setTileElements(tileElements)
    }, [tiles])

    return(
        <div 
            className="grid" 
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, auto )`,
                gridTemplateRows: `repeat(${gridSize}, auto )`
             }}
        >
            {tileElements}
            <Player />
        </div>
    )
}
export default Grid;