export default function updateTiles(state, type, pastTileName, futureTileName){
  
    const pastTile = {
        ...state.tileTracker[pastTileName],
        isObstruction: false,
        player: null,
        type: null
    }

    const futureTile = {
        ...state.tileTracker[futureTileName],
        isObstruction: true,
        player: state.player.name,
        type: type
    }

    return({pastTile, futureTile})
}