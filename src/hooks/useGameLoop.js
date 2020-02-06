import { useEffect } from "react"
import moveProjectile from "../utils/moveProjectile.js"

export default function useGameLoop(state, dispatch){
    useEffect(() => {
        const handleTime = setTimeout(() => {
            // updates the state of projectiles
            const updatedProjectiles = 
                // removes projectiles that have already traveled 4 spaces
                state.projectiles.filter(function(projectile){
                    if(projectile.distanceTraveled < 4){
                        return true
                    }
                    return false
                })
                // updates position and distance traveled
                .map(projectile => {
                    const updatedProjectile = moveProjectile(projectile)
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