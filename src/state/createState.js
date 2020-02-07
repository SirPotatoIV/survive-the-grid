import { makeTiles, makeTileObject } from "../grids/makeTiles"
import makePlayers from "../players/makePlayers"

export default function createState() {
    return {
        gridTiles: makeTiles(),
        tileTracker: makeTileObject(),
        players: makePlayers(["main", "AI_1", "AI_2", "AI_3"]),
        otherPlayers: [],
        projectiles: []
    }
}