import { makeTiles, makeTileObject } from "../grids/makeTiles"

export default function createState() {
    return {
        gridTiles: makeTiles(),
        tileTracker: makeTileObject(),
        player: {
            name: "Jake",
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
                health: 3
            },
            {
                name: "player3",
                x: 9,
                y: 2,
                orientation: 180,
                health: 3
            },
            {
                name: "player4",
                x: 9,
                y: 9,
                orientation: 0,
                health: 3
            }
        ],
        projectiles: []
    }
}