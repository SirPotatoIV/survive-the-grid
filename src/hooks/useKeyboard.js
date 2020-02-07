import { useContext, useEffect } from "react"
import { GameContext } from "../state/context";
import { MOVE_PLAYER, ROTATE_PLAYER, BUILD_WALL, SHOOT_PROJECTILE } from "../state/actions"
import detectCollision from "../utils/detectCollision"
import buildWall from "../utils/buildWall"
import shootProjectile from "../utils/shootProjectile";
import updateTiles from "../utils/updateTiles"

export default function useKeyboard(test) {
    const { state, dispatch } = useContext(GameContext)

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    });
    function handleKeyPress(event, playerName) {
        // create new object containing current state
        const player = state.players.main

        const pastTileName = `x${player.x}y${player.y}`

        switch (event.key) {
            case "w":
                // player is NOT facing the direction they want to move, rotate player
                if (player.orientation !== 0) {
                    // change player orientation
                    player.orientation = 0;
                    // send updated position to reducer
                    return dispatch({
                        type: ROTATE_PLAYER,
                        payload: {player}
                    })
                }
                // if player movement is not a collision, update the players location
                if (detectCollision(state, player.x, player.y - 1) === "not obscruction") {
                    // name of tile that player will move into
                    const futureTileName = `x${player.x}y${player.y - 1}`
                    // get new values for previous tile player was in and tile the player moved into
                    const {pastTile, futureTile} = updateTiles(state, "player", pastTileName, futureTileName, player)
                    // decrement player y position
                    player.y--;
                    // send updated position to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: {
                            player,
                            pastTile, 
                            futureTile} 
                    })
                }
                break
            case "s":
                // player is NOT facing the direction they want to move, rotate player
                if (player.orientation !== 180) {
                    // change player orientation
                    player.orientation = 180;
                    // send updated position to reducer
                    return dispatch({
                        type: ROTATE_PLAYER,
                        payload: {player}
                    })
                }
                // if player movement is not a collision, update the players location
                if (detectCollision(state, player.x, player.y + 1) === "not obscruction") {
                    // name of tile that player will move into
                    const futureTileName = `x${player.x}y${player.y + 1}`
                    // get new values for previous tile player was in and tile the player moved into
                    const {pastTile, futureTile} = updateTiles(state, "player", pastTileName, futureTileName, player)
                    // increment player y position
                    player.y++;
                    // send updated player position, pastTile, and futureTile to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: {
                            player,
                            pastTile, 
                            futureTile} 
                    })
                }
                break
            case "d":
                // player is NOT facing the direction they want to move, rotate player
                if (player.orientation !== 90) {
                    // change player orientation
                    player.orientation = 90;
                    // send updated postion to reducer
                    return dispatch({
                        type: ROTATE_PLAYER,
                        payload: {player}
                    })
                }
                // if player movement is not a collision, update the players location
                if (detectCollision(state, player.x + 1, player.y) === "not obscruction") {
                    // name of tile that player will move into
                    const futureTileName = `x${player.x + 1}y${player.y}`
                    // get new values for previous tile player was in and tile the player moved into
                    const {pastTile, futureTile} = updateTiles(state, "player", pastTileName, futureTileName, player)
                    // increment player x position
                    player.x++;
                    // send updated position to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: {
                            player,
                            pastTile, 
                            futureTile} 
                    })
                }
                break
            case "a":
                // player is NOT facing the direction they want to move, rotate player
                if (player.orientation !== 270) {
                    // change player orientation
                    player.orientation = 270;
                    // send updated positon to reducer
                    return dispatch({
                        type: ROTATE_PLAYER,
                        payload: {player}
                    })
                }
                // if player movement is not a collision, update the players location
                if (detectCollision(state, player.x - 1, player.y) === "not obscruction") {
                    // name of tile that player will move into
                    const futureTileName = `x${player.x - 1}y${player.y}`
                    // get new values for previous tile player was in and tile the player moved into
                    const {pastTile, futureTile} = updateTiles(state, "player", pastTileName, futureTileName, player)
                    // decrement player position x
                    player.x--;
                    // send updated position to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: {
                            player,
                            pastTile, 
                            futureTile} 
                    })
                }
                break
            case "e":
                // -- to be used for building a wall --
                const tileWithWall = buildWall(state)
                return dispatch({
                    type: BUILD_WALL,
                    payload: {
                        tileName: tileWithWall.tileName,
                        value: tileWithWall
                    }
                })
            case " ":
                // https://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
                // preventing spacebar from causing page to scroll
                event.preventDefault();
                // -- to be used for firing a projectile --
                const newProjectile = shootProjectile(state)
                return dispatch({
                    type: SHOOT_PROJECTILE,
                    payload: {
                        newProjectile
                    }
                })
            default:
                console.log("you hit the wrong key dog")
        }
    }
}