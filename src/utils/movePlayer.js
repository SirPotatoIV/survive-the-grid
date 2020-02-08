import { DIRECTIONS } from "../utils/constants"
import { ROTATE_PLAYER, MOVE_PLAYER } from "../state/actions";

export default function movePlayer(playerName, direction, state, dispatch){
    const updatedPlayer = {
        ...state.players[playerName],
        dx: 0,
        dy: 0,
        newOrientation: 0,
    }
    switch (direction) {
        case DIRECTIONS.NORTH:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 0) {
                // change player orientation
                updatedPlayer.newOrientation = 0;
                updatedPlayer.isRotating = true;
                // send updated position to reducer
                return dispatch({
                    type: ROTATE_PLAYER,
                    payload: {updatedPlayer}
                })
            }
            // get new values for previous tile player was in and tile the player moved into
            updatedPlayer.dy = -1
            updateDxDy(updatedPlayer)
            return
        case DIRECTIONS.SOUTH:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 180) {
                // change player orientation
                updatedPlayer.newOrientation = 180;
                updatedPlayer.isRotating = true;
                // send updated position to reducer
                return dispatch({
                    type: ROTATE_PLAYER,
                    payload: {updatedPlayer}
                })
            }
            updatedPlayer.dy = 1
            updateDxDy(updatedPlayer)
            return
        case DIRECTIONS.EAST:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 90) {
                // change player orientation
                updatedPlayer.newOrientation = 90;
                updatedPlayer.isRotating = true;
                // send updated postion to reducer
                return dispatch({
                    type: ROTATE_PLAYER,
                    payload: {updatedPlayer}
                })
            }
            updatedPlayer.dx = 1
            updateDxDy(updatedPlayer)
            return
        case DIRECTIONS.WEST:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 270) {
                // change player orientation
                updatedPlayer.newOrientation = 270;
                updatedPlayer.isRotating = true;
                return dispatch({
                    type: ROTATE_PLAYER,
                    payload: {updatedPlayer}
                })
            }
            // update player's change in direction
            updatedPlayer.dx = -1
            updateDxDy(updatedPlayer)
            return
        default:
            console.log("you hit the wrong key dog")
            break
        }

        function updateDxDy(updatedPlayer){
            console.log(updatedPlayer)
            updatedPlayer.isMoving = true;
            return dispatch({
                type: MOVE_PLAYER,
                payload: {updatedPlayer} 
            })
        }
}

