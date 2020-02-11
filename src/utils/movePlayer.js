import { DIRECTIONS } from "../utils/constants"
import { ROTATE_PLAYER, MOVE_PLAYER } from "../state/actions";

export default function movePlayer(playerName, direction, x, y, orientation, dispatch){
    switch (direction) {
        case DIRECTIONS.NORTH:
            // player is NOT facing the direction they want to move, rotate player
            if (orientation !== 0) {
                // send updated position to reducer
                return dispatch({
                    type: ROTATE_PLAYER,
                    payload: {playerName, newOrientation: 0}
                })
            }
            // get new values for previous tile player was in and tile the player moved into
            return dispatch({
                type: MOVE_PLAYER,
                payload: {playerName, dy: -1, dx: 0}
            })
        case DIRECTIONS.SOUTH:
            // player is NOT facing the direction they want to move, rotate player
            if (orientation !== 180) {
                // send updated position to reducer
                return dispatch({
                    type: ROTATE_PLAYER,
                    payload: {playerName, newOrientation: 180}
                })
            }
            // get new values for previous tile player was in and tile the player moved into
            return dispatch({
                type: MOVE_PLAYER,
                payload: {playerName, dy: 1, dx: 0}
            })
        case DIRECTIONS.EAST:
            // player is NOT facing the direction they want to move, rotate player
            if (orientation !== 90) {
                // send updated position to reducer
                return dispatch({
                    type: ROTATE_PLAYER,
                    payload: {playerName, newOrientation: 90}
                })
            }
            // get new values for previous tile player was in and tile the player moved into
            return dispatch({
                type: MOVE_PLAYER,
                payload: {playerName, dx: 1, dy: 0}
            })
        case DIRECTIONS.WEST:
            // player is NOT facing the direction they want to move, rotate player
            if (orientation !== 270) {
                // send updated position to reducer
                return dispatch({
                    type: ROTATE_PLAYER,
                    payload: {playerName, newOrientation: 270}
                })
            }
            // get new values for previous tile player was in and tile the player moved into
            return dispatch({
                type: MOVE_PLAYER,
                payload: {playerName, dx: -1, dy: 0}
            })
        default:
            console.log("you hit the wrong key dog")
            break
        }
}

