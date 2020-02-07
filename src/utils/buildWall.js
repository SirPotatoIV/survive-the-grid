import {WALL} from "../grids/tileTypes"

export default function buildWall(state){
    // all the updated values that a tile changed to wall needs
    const wallProperties = {
        isObstruction: true,
        type: WALL,
        health: 3
    }
    // deconstruction the values from the player to make code easier to read
    const { x, y, orientation} = state.player

    if(orientation === 0){
        // get name of tile in front of the player
        const tileName = `x${x}y${y - 1}`
        const updatedTile = {...state.tileTracker[tileName], ...wallProperties} // new Object()
        // update tile in front of the player to be type wall
        return(updatedTile)
    }

    if(orientation === 180){
        // get name of tile in front of the player
        const tileName = `x${x}y${y + 1}`
        const updatedTile = {...state.tileTracker[tileName], ...wallProperties} 
        // update tile in front of the player to be type wall
        return(updatedTile)
    }

    if(orientation === 90){
        // get name of tile in front of the player
        const tileName = `x${x + 1}y${y}`
        const updatedTile = {...state.tileTracker[tileName], ...wallProperties} 
        // update tile in front of the player to be type wall
        return(updatedTile)
    }

    if(orientation === 270){
        // get name of tile in front of the player
        const tileName = `x${x - 1}y${y}`
        const updatedTile = {...state.tileTracker[tileName], ...wallProperties} 
        // update tile in front of the player to be type wall
        return(updatedTile)
    }
}