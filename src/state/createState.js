import {makeTiles, makeTileObject} from "../grids/makeTiles"

export default function createState(){
    return {
        gridTiles: makeTiles(),
        tileTracker: makeTileObject(),
        player: {
            position:{
                   x: 1,
                   y: 1,
                   orientation: 0
            }
        }
    }
}