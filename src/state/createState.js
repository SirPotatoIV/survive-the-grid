import { makeTiles, makeTileObject } from "../grids/makeTiles"

export default function createState() {
    return {
        gridTiles: makeTiles(),
        tileTracker: makeTileObject(),
        player: {
            name: "Jake",
            position: {
                x: 2,
                y: 2,
                orientation: 180
            }
        },
        projectiles: []
    }
}