import { makeTiles, makeTileObject } from "../grids/makeTiles"
import makePlayers from "../players/makePlayers"
import {maps} from "../grids/maps"

// 4 player name list ["main", "AI_1", "AI_2", "AI_3"])
const playerNames = ["main", "AI_1"]
const map = maps.map1
export default function createState() {
    return {
        gridTiles: makeTiles(map),
        tileTracker: makeTileObject(map),
        mapSize: map.length,
        players: makePlayers(playerNames, [[2,2], [2,3], [3,2], [3,3]]),
        // players requires the names and the start positions.
        otherPlayers: [],
        projectiles: []
    }
}