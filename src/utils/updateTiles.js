import {EMPTY} from "../grids/tileTypes"

export default function updateTiles(state, type, pastTileName, futureTileName, player){
    const pastTile = {
        ...state.tileTracker[pastTileName],
        isObstruction: false,
        player: null,
        type: EMPTY
    }

    const futureTile = {
        ...state.tileTracker[futureTileName],
        isObstruction: true,
        player: player.name || null,
        type: type
    }

    return({pastTile, futureTile})
}