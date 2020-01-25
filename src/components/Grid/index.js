import React, {useState, useEffect} from 'react';
import "./style.css"
import createTiles from "../../utils/gridCreator.js"

import Tile from "../Tile"

const tiles = createTiles(5)

function Grid({gridSize}){
    
    // const [tiles, setTiles] = useState([])
    // const [tileElements, setTileElements] = useState([])
    console.log(tiles["x1y1"])
    const testArray = [1, 2, 3, 4];
    const testMap = testArray.map(x => x * 2)
    console.log(testMap)
    const tileElements = tiles.map((tile)=>{
        const columnStart = tile.location[1]; 
        const columnEnd = columnStart + 1;
        const rowStart = tile.location[0]
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
    console.log(tileElements)

    useEffect(()=>{
        // const newTiles = createTiles()
        // setTiles(newTiles)
    }, [])

    useEffect(()=> {
    //     console.log(tiles, Array.isArray(tiles))
    //     const allTiles = tiles.map((tile)=>{
    //         return(tile.location)
    //         // const columnStart = tile.location[1] 
    //         // const columnEnd = columnStart + 1;
    //         // const rowStart = tile.location[0]
    //         // const rowEnd = rowStart + 1;

    //         // return(
    //         //         <div 
    //         //             key={tile.location} 
    //         //             style={{
    //         //                 gridColumn: `${columnStart} / ${columnEnd}`,
    //         //                 gridRow: `${rowStart} / ${rowEnd} `
    //         //             }}
    //         //         >
    //         //             {tile.location}
    //         //         </div>
    //         //     )
    //     })
    //     console.log(allTiles)
    //     setTileElements(allTiles)
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
        </div>
    )
}
export default Grid;