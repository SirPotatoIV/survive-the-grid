import makeTiles from "../grids/makeTiles"
import DIMENSIONS from "../utils/constants"

export default function createState(){
    return {
        gridTileLength: 5,
        gridTiles: makeTiles(this.gridTileLength)
    }
}