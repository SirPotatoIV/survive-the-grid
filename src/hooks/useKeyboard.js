import { useEffect } from "react"
import { BUILD_WALL, SHOOT_PROJECTILE } from "../state/actions"
import movePlayer from "../utils/movePlayer";
import { DIRECTIONS } from "../utils/constants";

export default function useKeyboard(state, dispatch) {
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    });
    function handleKeyPress(event) {
        // create new object containing current state
        const player = state.players.main
        console.log(player)

        switch (event.key) {
            case "w":
                movePlayer(player.name, DIRECTIONS.NORTH, player.x, player.y, player.orientation, dispatch)
                break
            case "s":
                movePlayer(player.name, DIRECTIONS.SOUTH, player.x, player.y, player.orientation, dispatch)
                break
            case "d":
                movePlayer(player.name, DIRECTIONS.EAST, player.x, player.y, player.orientation, dispatch)
                break
            case "a":
                movePlayer(player.name, DIRECTIONS.WEST, player.x, player.y, player.orientation, dispatch)
                break
            case "e":
                // -- to be used for building a wall --
                return dispatch({
                    type: BUILD_WALL,
                    payload: {playerName: player.name}
                })
            case " ":
                // https://stackoverflow.com/questions/22559830/html-prevent-space-bar-from-scrolling-page
                // preventing spacebar from causing page to scroll
                event.preventDefault();
                return dispatch({
                    type: SHOOT_PROJECTILE,
                    payload: {playerName: player.name}
                })
            default:
                console.log("you hit the wrong key dog")
        }
    }
}