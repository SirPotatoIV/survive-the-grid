import {mapString} from "./map"
import {tileTypes} from "./tileTypes"
const {mapBoundary,
    wall,
    player,
    projectile,
    empty} = tileTypes


export default function makeTiles(gridSize){
   
    return mapString.reduce(function(tileAccumulator, currentRow, y){
        return [
            ...tileAccumulator,
            ...currentRow.split("").reduce(function(rowAccumulator, currentTile, x){
                switch(currentTile){
                    case " ":
                        return [
                            ...rowAccumulator,
                            {
                                tileName: `x${x+1}y${y+1}`,
                                type: empty,
                                isObstruction: false,
                                x: x+1,
                                y: y+1
                            }
                        ];
                    case "o":
                        return [
                            ...rowAccumulator,
                            {
                                tileName: `x${x+1}y${y+1}`,
                                type: mapBoundary,
                                isObstruction: true,
                                x: x+1,
                                y: y+1
                            }
                        ]
                    default:
                        console.log("Tile character not recognized in mapString: ", currentTile)
                        return [...rowAccumulator];
                }

            },[])
        ]
    }, [])

    
    
    // // used to store tiles as they are created
    // let createdTiles = [];
    // // loop to create gridSize * gridSize objects that will represent tiles
    // let x = 0;
    // // outer loop for x direction tiling
    // for(let i=1; i <= gridSize; i++){
    //     // inner loop for y direction tiling
    //     for(let j=1; j <= gridSize; j++){
    //         // create the name of the tile to use for reference in future code ... possibly
    //         const tileName = `x${i}y${j}`
    //         // used for figuring out the tiles location
    //         const tileLocation = 
    //         {
    //             x: i,
    //             y: j
    //         };
    //         // stores created variables into an object, which will be stored in createdTiles
    //         const newTile = {
    //             tileName,
    //             location: tileLocation,
    //             isObstruction: false
    //         }
    //         // stores new tile in createdTiles
    //         createdTiles[x] = newTile
    //         x++;
    //     }
    // }
    // // updates the tile state
    // return(createdTiles)
}