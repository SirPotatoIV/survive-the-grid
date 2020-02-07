import {PLAYER, WALL, MAP_BOUNDARY} from "../grids/tileTypes"
import { GAME_PARAMS } from "../utils/constants"

export default function projectileCollision(state, futureProjectileState){
    const x = futureProjectileState.x;
    const y = futureProjectileState.y;
    
    const targetTile = state.tileTracker[`x${x}y${y}`]
    if(targetTile.isObstruction && targetTile.type === PLAYER){
        futureProjectileState.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
        return(futureProjectileState)
    }
    if(targetTile.isObstruction && targetTile.type === WALL){
        futureProjectileState.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
        return(futureProjectileState)
    }
    if(targetTile.isObstruction && targetTile.type === MAP_BOUNDARY){
        futureProjectileState.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
        return(futureProjectileState)
    }
    return(futureProjectileState)
}