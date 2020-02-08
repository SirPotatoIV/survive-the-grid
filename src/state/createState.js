import { makeTiles, makeTileObject } from "../maps/makeTiles"
import makePlayers from "../players/makePlayers"
import {maps} from "../maps/maps"

// 4 player name list ["main", "AI_1", "AI_2", "AI_3"])
const playerNames = ["main", "AI_1", "AI_2", "AI_3"]
const map = maps.map2
export default function createState() {
    return {
        gridTiles: makeTiles(map),
        tileTracker: makeTileObject(map),
        mapSize: map.length,
        players: makePlayers(playerNames, [[2,2], [5,2], [2,5], [5,5]]),
        // players requires the names and the start positions.
        projectiles: [],
        isRunning: false
    }
}