export default function buildWall(state){
    // let wall = {
    //     x: null,
    //     y: null,
    //     orientation: null,
    //     health: 100
    // }
    // check orientation
    if(state.player.position.orientation === 0){
        // wall.x = state.player.position.x;
        // wall.y = state.player.position.y - 1;
        // wall.orientation = state.player.position.orientation;
        // return(wall)
        const tileName = `x${state.player.position.x}y${state.player.position.y - 1}`
        const updatedTile = {...state.tileTracker[tileName]}
        updatedTile.isObstruction = true;
        updatedTile.type = "wall"
        return(updatedTile)
        // return tileName
    }
    // get name of tile in front of the player
    // update tile in front of the player to be type wall
    // rerender tile to show wall
}