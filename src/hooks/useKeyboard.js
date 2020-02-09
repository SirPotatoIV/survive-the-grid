import { useEffect } from "react"
import { BUILD_WALL, SHOOT_PROJECTILE } from "../state/actions"
import movePlayer from "../utils/movePlayer";
import { DIRECTIONS } from "../utils/constants";
// import checkPlayerCollision from "../utils/checkPlayerCollision";

export default function useKeyboard(state, dispatch) {
    // const { state, dispatch } = useContext(GameContext)
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    });
    function handleKeyPress(event) {
        // create new object containing current state
        const updatedPlayer = state.players.main

        // const pastTileName = `x${player.x}y${player.y}`

        switch (event.key) {
            case "w":
                movePlayer(updatedPlayer.name, DIRECTIONS.NORTH, state, dispatch)
                break
            case "s":
                movePlayer(updatedPlayer.name, DIRECTIONS.SOUTH, state, dispatch)
                break
            case "d":
                movePlayer(updatedPlayer.name, DIRECTIONS.EAST, state, dispatch)
                // player is NOT facing the direction they want to move, rotate player
                break
            case "a":
                movePlayer(updatedPlayer.name, DIRECTIONS.WEST, state, dispatch)
                break
            case "e":
                // -- to be used for building a wall --
                updatedPlayer.isBuilding = true;
                return dispatch({
                    type: BUILD_WALL,
                    payload: {updatedPlayer}
                })
            case " ":
                // https://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
                // preventing spacebar from causing page to scroll
                event.preventDefault();
                // -- to be used for firing a projectile --
                updatedPlayer.isShooting = true;
                return dispatch({
                    type: SHOOT_PROJECTILE,
                    payload: {updatedPlayer}
                })
            default:
                console.log("you hit the wrong key dog")
        }
    }
}