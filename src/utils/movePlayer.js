import { DIRECTIONS } from "../utils/constants"
import updateTiles from "../utils/updateTiles"

export default function movePlayer(player, direction, state){
    const pastTileName = `x${player.x}y${player.y}`
    let futureTileName = "";

    switch (direction) {
        case DIRECTIONS.NORTH:
            // player is NOT facing the direction they want to move, rotate player
            if (player.orientation !== 0) {
                // change player orientation
                player.orientation = 0;
                // send updated position to reducer
                return(player)
            }
            // name of tile that player will move into
            futureTileName = `x${player.x}y${player.y - 1}`
            // get new values for previous tile player was in and tile the player moved into
            player.y--;
            // send updated position to reducer
            break
        case DIRECTIONS.SOUTH:
            // player is NOT facing the direction they want to move, rotate player
            if (player.orientation !== 180) {
                // change player orientation
                player.orientation = 180;
                // send updated position to reducer
                return(player)
            }
            // name of tile that player will move into
            futureTileName = `x${player.x}y${player.y + 1}`
            // increment player y position
            player.y++;
            // send updated player position, pastTile, and futureTile to reducer
            break
        case DIRECTIONS.EAST:
            // player is NOT facing the direction they want to move, rotate player
            if (player.orientation !== 90) {
                // change player orientation
                player.orientation = 90;
                // send updated postion to reducer
                return(player)
            }
            // name of tile that player will move into
            futureTileName = `x${player.x + 1}y${player.y}`
            player.x++;
            // send updated position to reducer
            break
        case DIRECTIONS.WEST:
            // player is NOT facing the direction they want to move, rotate player
            if (player.orientation !== 270) {
                // change player orientation
                player.orientation = 270;
                // send updated positon to reducer
                return(player)
            }
            // name of tile that player will move into
            futureTileName = `x${player.x - 1}y${player.y}`
            // decrement player position x
            player.x--;
            // send updated position to reducer
            break
        default:
            console.log("you hit the wrong key dog")
            break
        }
        const {pastTile, futureTile} = updateTiles(state, "player", pastTileName, futureTileName, player)
}