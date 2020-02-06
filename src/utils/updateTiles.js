import {EMPTY} from "../grids/tileTypes"

export default function updateTiles(state, type, pastTileName, futureTileName){
    // tilr structure for reference
    //{
    //     tileName: `x${x+1}y${y+1}`,
    //     type: empty,
    //     isObstruction: false,
    //     x: x+1,
    //     y: y+1
    // }
    const pastTile = {
        ...state.tileTracker[pastTileName],
        isObstruction: false,
        player: null,
        type: EMPTY
    }

    const futureTile = {
        ...state.tileTracker[futureTileName],
        isObstruction: true,
        player: state.player.name,
        type: type
    }

    return({pastTile, futureTile})
}