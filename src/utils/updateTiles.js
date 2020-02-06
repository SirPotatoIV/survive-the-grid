import {EMPTY} from "../grids/tileTypes"

export default function updateTiles(state, type, pastTileName, futureTileName){

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