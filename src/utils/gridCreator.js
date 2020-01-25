export default function createTiles(gridSize){
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
    return(createdTiles)
}