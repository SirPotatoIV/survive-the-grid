import {MAP_BOUNDARY, EMPTY} from "./tileTypes"

function makeTiles(tileMap){
   // Takes an array of strings from the map.js file and a reduce function with an embbeded reduce to create an array of objects.
   // -- The each object in the array equates to a tile in the map.
    return tileMap.reduce(function(tileAccumulator, currentRow, y){
        return [
            // spreads all previously created tiles into the next returned array. Results in all the tiles being in one array.
            ...tileAccumulator,
            // spreads the current indice, which is a string and splits the string into individual indices to form a new array to reduce.
            ...currentRow.split("").reduce(function(rowAccumulator, currentTile, x){
                // Used to differentiate between each character in tileMap and assign values to properties based on the character.
                switch(currentTile){
                    case " ":
                        return [
                            ...rowAccumulator,
                            {
                                tileName: `x${x+1}y${y+1}`,
                                type: EMPTY,
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
                                type: MAP_BOUNDARY,
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

}

function makeTileObject(tileMap){
    const gridTiles = makeTiles(tileMap);
    const tileTracker = {};
    // Makes an object with a property for every tile in the map.
    // -- the tile name is used as the property name. The value of the poperty is an object containing information about the tile.
    // -- each tile has values like x, y, type, isObstruction, etc 
    for(let i = 0; i < gridTiles.length; i++){
        tileTracker[gridTiles[i].tileName] = gridTiles[i]
    }
    return tileTracker
}

export {makeTiles, makeTileObject}