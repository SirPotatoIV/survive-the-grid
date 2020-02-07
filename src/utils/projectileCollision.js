import { PLAYER, WALL, MAP_BOUNDARY, EMPTY } from "../grids/tileTypes"
import { GAME_PARAMS } from "../utils/constants"
import { DAMAGE_WALL } from "../state/actions"

export default function projectileCollision(state, futureProjectileState, dispatch){
    const x = futureProjectileState.x;
    const y = futureProjectileState.y;
    
    let targetTile = state.tileTracker[`x${x}y${y}`]
    if(targetTile.isObstruction && targetTile.type === PLAYER){
        futureProjectileState.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
    }
    if(targetTile.isObstruction && targetTile.type === WALL){
        futureProjectileState.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
        targetTile.health--
        if (targetTile.health < 1){
            targetTile ={
                ...targetTile,
                health: null,
                type: EMPTY,
                isObstruction: false
            }
        }
        dispatch({
            type: DAMAGE_WALL,
            payload: targetTile
        })
        return(futureProjectileState)
    }
    if(targetTile.isObstruction && targetTile.type === MAP_BOUNDARY){
        futureProjectileState.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
        return(futureProjectileState)
    }
    return(futureProjectileState)
}