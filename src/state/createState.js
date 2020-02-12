import { makeTiles, makeTileObject } from "../maps/makeTiles"
import makePlayers from "../players/makePlayers"
import {maps} from "../maps/maps"
import { PLAYER } from "../maps/tileTypes"

const map = maps.map2
export default function createState(numberOfAiPlayers) {
    const {players, playerArray} = makePlayers(numberOfAiPlayers)
    
    const initialState = {
        gridTiles: makeTiles(map),
        tileTracker: makeTileObject(map),
        mapSize: map.length,
        players: players,
        outPlayers: {},
        // players requires the names and the start positions.
        projectiles: [],
        isRunning: false
    }

    // Adds initial position of players to tileTracker
    for(let i=0; i < playerArray.length; i++){
        const NameOftileToUpdate = `x${playerArray[i].x}y${playerArray[i].y}`
        initialState.tileTracker[NameOftileToUpdate] = {
            ...initialState.tileTracker[NameOftileToUpdate],
            isObstruction: true,
            type: PLAYER,
            player: playerArray[i].name
        }
    }

    return(initialState) 
}