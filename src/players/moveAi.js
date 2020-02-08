import { DIRECTIONS } from "../utils/constants"

export default function movePlayer(playerName, direction, state){
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
                return(updatedPlayer)
            }
            // get new values for previous tile player was in and tile the player moved into
            updatedPlayer.dy = -1
            updatedPlayer.isMoving = true;
            return(updatedPlayer)
        case DIRECTIONS.SOUTH:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 180) {
                // change player orientation
                updatedPlayer.newOrientation = 180;
                updatedPlayer.isRotating = true;
                // send updated position to reducer
                return(updatedPlayer)
            }
            updatedPlayer.dy = 1
            updatedPlayer.isMoving = true;
            return(updatedPlayer)
        case DIRECTIONS.EAST:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 90) {
                // change player orientation
                updatedPlayer.newOrientation = 90;
                updatedPlayer.isRotating = true;
                // send updated postion to reducer
                return(updatedPlayer)
            }
            updatedPlayer.dx = 1
            updatedPlayer.isMoving = true;
            return(updatedPlayer)
        case DIRECTIONS.WEST:
            // player is NOT facing the direction they want to move, rotate player
            if (updatedPlayer.orientation !== 270) {
                // change player orientation
                updatedPlayer.newOrientation = 270;
                updatedPlayer.isRotating = true;
                return(updatedPlayer)
            }
            // update player's change in direction
            updatedPlayer.dx = -1
            updatedPlayer.isMoving = true;
            return(updatedPlayer)
        default:
            console.log("you hit the wrong key dog")
            break
        }
}
