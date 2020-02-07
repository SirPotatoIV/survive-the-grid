import { makeTiles, makeTileObject } from "../grids/makeTiles"
import makePlayers from "../players/makePlayers"

export default function createState() {
    return {
        gridTiles: makeTiles(),
        tileTracker: makeTileObject(),
        players: {
                    main: {
                        name: "main",
                        x: 2,
                        y: 2,
                        orientation: 180,
                        health: 3
                    }
                },
        newPlayers: makePlayers(),
        otherPlayers: [],
        projectiles: []
    }
}