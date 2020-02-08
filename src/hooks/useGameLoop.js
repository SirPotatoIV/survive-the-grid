import { useEffect, useContext } from "react"
import { GameContext } from "../state/context";
// import useKeyboard from "./useKeyboard"
import moveProjectile from "../utils/moveProjectile.js"
import aiDecision from "../players/aiDecision.js"
import { GAME_PARAMS } from "../utils/constants.js"
import { RERENDER } from "../state/actions.js"

export default function useGameLoop(state, dispatch){

    const newState = {...state}
    useEffect(() => {
        const handleTime = setTimeout(() => {
            // currently using to make sure game doesn't start until start game is pressed.
            // -- also using as a clunky way to update the tileTracker to know where each player is before the game starts
            if(!state.isRunning){
                const empty = Object.entries(newState.players).map(([key, player]) => {
                    const currentTile = `x${player.x}y${player.y}`
                    newState.tileTracker[currentTile].isObstruction = true;
                    return("blank")
                })
                return dispatch({
                    type: RERENDER,
                    payload: {newState}
                })
            }
            const tileObstructionView = `${newState.tileTracker["x2y2"].isObstruction}, ${newState.tileTracker["x2y3"].isObstruction}, ${newState.tileTracker["x3y2"].isObstruction}, ${newState.tileTracker["x3y3"].isObstruction}`
            console.log(tileObstructionView)
            // update player positions
            // check if player collisions occurred
            // update projectile position
            // check if projectile collided
            // -- if collision, collided with what (player name or tileName for wall)
            // check if player or wall health needs to be update
            const updatedPlayers = aiDecision(newState, dispatch)
            newState.players = updatedPlayers;
            // take action
            const newPlayers = Object.entries(newState.players).map(([key, player]) => {
                const name = player.name
                const x = player.x+player.dx;
                const y = player.y+player.dy;
                const currentTile = `x${player.x}y${player.y}`
                let tileToCheck = ""

                if(player.isRotating){
                    newState.players[name].orientation = player.newOrientation 
                }
                if(player.isMoving){
                    tileToCheck = `x${x}y${y}`
                }
                if(player.isMoving && !newState.tileTracker[tileToCheck].isObstruction){
                    // update player positions
                    newState.players[name].x = x;
                    newState.players[name].y = y;
                    // update tile moving into
                    newState.tileTracker[tileToCheck].isObstruction = true;
                    newState.tileTracker[tileToCheck].player = player.name;
                    // update tile moving out of
                    newState.tileTracker[currentTile].isObstruction = false;
                    console.log(newState.tileTracker[currentTile])
                    newState.tileTracker[currentTile].player = null;
                }
                // reset player properties used for action resolution
                newState.players[name].dx = 0;
                newState.players[name].dy = 0;
                newState.players[name].isMoving = false;
                newState.players[name].isRotating = false;
                return (player)
            })

            // updates the state of projectiles
            const updatedProjectiles = 
                // removes projectiles that have already traveled 4 spaces
                state.projectiles.filter(function(projectile){
                    if(projectile.distanceTraveled < GAME_PARAMS.PROJECTILE_RANGE){
                        return true
                    }
                    return false
                })
                // updates position and distance traveled
                .map(projectile => {
                    const updatedProjectile = moveProjectile(state, projectile, dispatch)
                    return(updatedProjectile)
                })
                
            if(state.projectiles.length > 0){
                return dispatch({
                    type: "UPDATE_PROJECTILES",
                    payload: updatedProjectiles
                })
            }
            
            return dispatch({
                type: RERENDER,
                payload: {newState}
            })
        }, 500)
        return () => clearTimeout(handleTime);
    }, [state.players, state.isRunning])
}