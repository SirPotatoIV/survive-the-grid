import { DIRECTIONS } from "../utils/constants"
import { ROTATE_PLAYER, MOVE_PLAYER } from "../state/actions";

export default function movePlayer(playerName, direction, state, dispatch){
    const updatedPlayer = {...state.players[playerName]}
    switch (direction) {
        case DIRECTIONS.NORTH:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 0) {
                // change player orientation
                updatedPlayer.orientation = 0;
                // send updated position to reducer
                rotate(updatedPlayer)
                return
            }
            // get new values for previous tile player was in and tile the player moved into
            updatedPlayer.dy = -1
            updateDxDy(updatedPlayer)
            return
        case DIRECTIONS.SOUTH:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 180) {
                // change player orientation
                updatedPlayer.orientation = 180;
                // send updated position to reducer
                rotate(updatedPlayer)
                return
            }
            updatedPlayer.dy = 1
            updateDxDy(updatedPlayer)
            return
        case DIRECTIONS.EAST:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 90) {
                // change player orientation
                updatedPlayer.orientation = 90;
                // send updated postion to reducer
                rotate(updatedPlayer)
                return
            }
            updatedPlayer.dx = 1
            updateDxDy(updatedPlayer)
            return
        case DIRECTIONS.WEST:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 270) {
                // change player orientation
                updatedPlayer.orientation = 270;
                rotate(updatedPlayer)
                return
            }
            // update player's change in direction
            updatedPlayer.dx = -1
            updateDxDy(updatedPlayer)
            return
        default:
            console.log("you hit the wrong key dog")
            break
        }

        function rotate(player){
            return dispatch({
                type: ROTATE_PLAYER,
                payload: {player}
            })
        }

        function updateDxDy(player){
            return dispatch({
                type: MOVE_PLAYER,
                payload: {player} 
            })
        }
}

