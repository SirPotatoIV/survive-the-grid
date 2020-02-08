import { makeTiles, makeTileObject } from "../grids/makeTiles"
import makePlayers from "../players/makePlayers"

// 4 player name list ["main", "AI_1", "AI_2", "AI_3"])

export default function createState() {
    return {
        gridTiles: makeTiles(),
        tileTracker: makeTileObject(),
        players: makePlayers(["main"]),
        otherPlayers: [],
        projectiles: []
    }
}