import makeTiles from "../grids/makeTiles"
import {DIMENSIONS} from "../utils/constants"

export default function createState(){
    return {
        gridTiles: makeTiles(DIMENSIONS.GRIDSIZE),
        player: {
            position:{
                   x: 1,
                   y: 1
            }
        }
    }
}