import { makeTiles, makeTileObject } from "../grids/makeTiles"
import { GAME_PARAMS } from "../utils/constants"

export default function createState() {
    return {
        gridTiles: makeTiles(),
        tileTracker: makeTileObject(),
        player: {
            name: "main",
            x: 2,
            y: 2,
            orientation: 180,
            health: 3
        },
        otherPlayers: [
            {
                name: "player2",
                x: 2,
                y: 9,
                orientation: 0,
                health: GAME_PARAMS.MAX_HEALTH
            },
            {
                name: "player3",
                x: 9,
                y: 2,
                orientation: 180,
                health: GAME_PARAMS.MAX_HEALTH
            },
            {
                name: "player4",
                x: 9,
                y: 9,
                orientation: 0,
                health: GAME_PARAMS.MAX_HEALTH
            }
        ],
        projectiles: []
    }
}