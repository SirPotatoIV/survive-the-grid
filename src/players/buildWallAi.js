import {WALL} from "../maps/tileTypes"
import { GAME_PARAMS } from "../utils/constants"

export default function buildWallAi(newState, player){
    // all the updated values that a tile changed to wall needs
    const wallProperties = {
        isObstruction: true,
        type: WALL,
        health: GAME_PARAMS.MAX_WALL_HEALTH
    }
    // deconstruction the values from the player to make code easier to read
    const { x, y, orientation} = player

    if(orientation === 0){
        // get name of tile in front of the player
        const tileName = `x${x}y${y - 1}`
        return(tileName)
    }

    if(orientation === 180){
        // get name of tile in front of the player
        const tileName = `x${x}y${y + 1}`
        return(tileName)
    }

    if(orientation === 90){
        // get name of tile in front of the player
        const tileName = `x${x + 1}y${y}`
        return(tileName)
    }

    if(orientation === 270){
        // get name of tile in front of the player
        const tileName = `x${x - 1}y${y}`
        return(tileName)
    }
}