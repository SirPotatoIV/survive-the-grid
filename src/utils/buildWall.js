export default function buildWall(state){
    
    if(state.player.position.orientation === 0){
        // get name of tile in front of the player
        const tileName = `x${state.player.position.x}y${state.player.position.y - 1}`
        const updatedTile = {...state.tileTracker[tileName]} // new Object()
        updatedTile.isObstruction = true;
        updatedTile.type = "wall"
        // update tile in front of the player to be type wall
        return(updatedTile)
    }

    if(state.player.position.orientation === 180){
        // get name of tile in front of the player
        const tileName = `x${state.player.position.x}y${state.player.position.y + 1}`
        const updatedTile = {...state.tileTracker[tileName]} // new Object()
        updatedTile.isObstruction = true;
        updatedTile.type = "wall"
        // update tile in front of the player to be type wall
        return(updatedTile)
    }

    if(state.player.position.orientation === 90){
        // get name of tile in front of the player
        const tileName = `x${state.player.position.x + 1}y${state.player.position.y}`
        const updatedTile = {...state.tileTracker[tileName]} // new Object()
        updatedTile.isObstruction = true;
        updatedTile.type = "wall"
        // update tile in front of the player to be type wall
        return(updatedTile)
    }

    if(state.player.position.orientation === 270){
        // get name of tile in front of the player
        const tileName = `x${state.player.position.x - 1}y${state.player.position.y}`
        const updatedTile = {...state.tileTracker[tileName]} // new Object()
        updatedTile.isObstruction = true;
        updatedTile.type = "wall"
        // update tile in front of the player to be type wall
        return(updatedTile)
    }
}