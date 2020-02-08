import { useEffect } from "react"
// import useKeyboard from "./useKeyboard"
import moveProjectile from "../utils/moveProjectile.js"
import { GAME_PARAMS } from "../utils/constants.js"

export default function useGameLoop(state, dispatch){
    useEffect(() => {
        const handleTime = setTimeout(() => {
            // update player positions
            // check if player collisions occurred
            // update projectile position
            // check if projectile collided
            // -- if collision, collided with what (player name or tileName for wall)
            // check if player or wall health needs to be update
            
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
        
        }, 100)
        return () => clearTimeout(handleTime);
    }, [state.projectiles])
}