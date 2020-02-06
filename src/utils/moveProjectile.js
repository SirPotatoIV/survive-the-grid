export default function moveProjectile(projectile){
    // PROJECTILE OBJECT STRUCTURE FOR REFERENCE
    // const newProjectile = {
    //     player: state.player.name,
    //     distanceTraveled: 0,
    //     x: state.player.position.x,
    //     y: state.player.position.y -1,
    //     orientation: 0
    // }
    if(projectile.distanceTraveled === 4){
        const updatedProjectile = {
            ...projectile, 
            shouldExist: false
        };
        return(updatedProjectile)
    }

    if(projectile.orientation === 0){
        // update projectile position
        const updatedProjectile = {
            ...projectile, 
            y: projectile.y -1, 
            distanceTraveled: projectile.distanceTraveled + 1 
        };
        return(updatedProjectile)
    }

    // if(projectile.orientation === 180){
    //     // get name of tile in front of the player
    //     const tileName = `x${projectile.x}y${projectile.y + 1}`
    //     const updatedTile = {...state.tileTracker[tileName]} // new Object()
    //     updatedTile.isObstruction = true;
    //     updatedTile.type = "wall"
    //     // update tile in front of the player to be type wall
    //     return(updatedTile)
    // }

    // if(projectile.orientation === 90){
    //     // get name of tile in front of the player
    //     const tileName = `x${projectile.x + 1}y${projectile.y}`
    //     const updatedTile = {...state.tileTracker[tileName]} // new Object()
    //     updatedTile.isObstruction = true;
    //     updatedTile.type = "wall"
    //     // update tile in front of the player to be type wall
    //     return(updatedTile)
    // }

    // if(projectile.orientation === 270){
    //     // get name of tile in front of the player
    //     const tileName = `x${projectile.x - 1}y${projectile.y}`
    //     const updatedTile = {...state.tileTracker[tileName]} // new Object()
    //     updatedTile.isObstruction = true;
    //     updatedTile.type = "wall"
    //     // update tile in front of the player to be type wall
    //     return(updatedTile)
    // }
}