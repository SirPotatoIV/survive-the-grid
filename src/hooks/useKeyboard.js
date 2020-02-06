import { useContext, useEffect } from "react"
import {GameContext} from "../state/context";
import {MOVE_PLAYER, BUILD_WALL} from "../state/actions"
import detectCollision from "../utils/detectCollision"
import buildWall from "../utils/buildWall"

export default function useKeyboard() {
    const {state, dispatch} = useContext(GameContext)

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

    function handleKeyPress(event) {
        // create new object containing current state
        const player = { ...state.player }

        switch (event.key) {
            case "w":
                // player is NOT facing the direction they want to move, rotate player
                if (player.position.orientation !== 0) {
                    // change player orientation
                    player.position.orientation = 0;
                    // send updated position to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: player
                    })
                }
                // if player movement is not a collision, update the players location
                if (detectCollision(state, player.position.x, player.position.y-1) === "not obscruction") {
                    // decrement player y position
                    player.position.y--;
                    // send updated position to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: player
                    })
                } 

                break
            case "s":
                // player is NOT facing the direction they want to move, rotate player
                if(player.position.orientation !== 180){
                    // change player orientation
                    player.position.orientation = 180;
                    // send updated position to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: player
                    })
                }
                // if player movement is not a collision, update the players location
                if(detectCollision(state, player.position.x, player.position.y+1) === "not obscruction"){
                    // increment player y position
                    player.position.y++;
                    // send updated position to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: player
                    })
                }
                break
            case "d":
                // player is NOT facing the direction they want to move, rotate player
                if(player.position.orientation !== 90){
                    // change player orientation
                    player.position.orientation = 90;
                    // send updated postion to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: player
                    }) 
                }
                // if player movement is not a collision, update the players location
                if(detectCollision(state, player.position.x+1, player.position.y) === "not obscruction"){
                    // increment player x position
                    player.position.x++;
                    // send updated position to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: player
                    })
                }
                break
            case "a":
                // player is NOT facing the direction they want to move, rotate player
                if (player.position.orientation !== 270) {
                    // change player orientation
                    player.position.orientation = 270;
                    // send updated positon to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: player
                    })
                } 
                // if player movement is not a collision, update the players location
                if (detectCollision(state, player.position.x-1, player.position.y) === "not obscruction"){
                    // decrement player position x
                    player.position.x--;
                    // send updated position to reducer
                    return dispatch({
                        type: MOVE_PLAYER,
                        payload: player
                    })
                }
                break
            case "e":
                // -- to be used for building a wall --
                buildWall(state, state.player)
                break
            case " ":
                // https://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
                // preventing spacebar from causing page to scroll
                event.preventDefault();
                // -- to be used for firing a projectile --

                break
            default:
                console.log("you hit the wrong key dog")
        }
    }
}