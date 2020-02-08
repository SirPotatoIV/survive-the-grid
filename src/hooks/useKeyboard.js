import { useContext, useEffect } from "react"
import { GameContext } from "../state/context";
import { BUILD_WALL, SHOOT_PROJECTILE } from "../state/actions"
// import detectCollision from "../utils/detectCollision"
import buildWall from "../utils/buildWall"
import shootProjectile from "../utils/shootProjectile";
// import updateTiles from "../utils/updateTiles"
import movePlayer from "../utils/movePlayer";
import { DIRECTIONS } from "../utils/constants";
// import checkPlayerCollision from "../utils/checkPlayerCollision";

export default function useKeyboard(test) {
    const { state, dispatch } = useContext(GameContext)

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    });
    function handleKeyPress(event, playerName) {
        // create new object containing current state
        const player = state.players.main

        // const pastTileName = `x${player.x}y${player.y}`

        switch (event.key) {
            case "w":
                movePlayer(player.name, DIRECTIONS.NORTH, state, dispatch)
                break
            case "s":
                movePlayer(player.name, DIRECTIONS.SOUTH, state, dispatch)
                break
            case "d":
                movePlayer(player.name, DIRECTIONS.EAST, state, dispatch)
                // player is NOT facing the direction they want to move, rotate player
                break
            case "a":
                movePlayer(player.name, DIRECTIONS.WEST, state)
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