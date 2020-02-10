import { makeTiles, makeTileObject } from "../maps/makeTiles"
import makePlayers from "../players/makePlayers"
import {maps} from "../maps/maps"

const map = maps.map2
export default function createState(numberOfAiPlayers) {
    return {
        gridTiles: makeTiles(map),
        tileTracker: makeTileObject(map),
        mapSize: map.length,
        players: makePlayers(numberOfAiPlayers),
        outPlayers: {},
        // players requires the names and the start positions.
        projectiles: [],
        isRunning: false
    }
}