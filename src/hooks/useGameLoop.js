import { useEffect } from "react"
import { GAME_PARAMS, DIMENSIONS } from "../utils/constants.js"
import { RERENDER, END_GAME } from "../state/actions.js"
import {WALL, PLAYER, EMPTY, MAP_BOUNDARY} from "../maps/tileTypes.js"
import aiDecision from "../players/aiDecision.js"
import calcTileToCheck from "../utils/calcTileToCheck.js";
import shootProjectile from "../utils/shootProjectile.js"

const emptyTile = {
    type: EMPTY,
    isObstruction: false,
    player: null
}

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
                    newState.tileTracker[currentTile].type = PLAYER;
                    newState.tileTracker[currentTile].player = player.name;
                    return("blank")
                })
                return dispatch({
                    type: RERENDER,
                    payload: {newState}
                })
            }
            // updates the state of projectiles
            // updates position and distance traveled
            if(newState.projectiles.length !== 0){
                // removes projectiles that have already traveled 4 spaces
                const filteredProjectiles = newState.projectiles.filter(function(projectile){
                    if(projectile.distanceTraveled < GAME_PARAMS.PROJECTILE_RANGE){
                        return true
                    }
                    return false
                })

                const updatedProjectiles = filteredProjectiles.map(projectile => {
                    const currentTileName = `x${projectile.x}y${projectile.y}`
                    const currentTile = newState.tileTracker[currentTileName]
                    const tileType = currentTile.type
                    switch(tileType){
                        case EMPTY:
                            projectile.x = projectile.x+projectile.dx;
                            projectile.y = projectile.y+projectile.dy;
                            projectile.distanceTraveled++
                            break
                        case WALL:
                            newState.tileTracker[currentTileName].health--
                            if(newState.tileTracker[currentTileName].health === 0){
                                newState.tileTracker[currentTileName] = {...newState.tileTracker[currentTileName], ...emptyTile}
                            }
                            projectile.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
                            break
                        case PLAYER:
                            newState.players[currentTile.player].health--
                            projectile.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
                            break
                        case MAP_BOUNDARY:
                            projectile.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
                            break
                        default:
                            console.log("tile type unknown. Projectile will be deleted") 
                            projectile.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
                            break
                    }
                    return(projectile)
                })
                newState.projectiles = updatedProjectiles;
            }
            // =====================================
            // AI makes decisions
            newState.players = aiDecision(newState, dispatch)
            //=====================================================
             
            // take action
            const newPlayers = Object.entries(newState.players).map(([key, player]) => {
                const name = player.name
                const x = player.x+player.dx;
                const y = player.y+player.dy;
                const currentTileName = `x${player.x}y${player.y}`
                const tileToCheck = calcTileToCheck(player)
                const newTileIsObstruction = newState.tileTracker[tileToCheck].isObstruction
                // Check is player is still alive
                if(player.health <= 0){
                    // update tileTracker to indicate there is no longer anyone in the tyle
                    newState.tileTracker[currentTileName] = {...newState.tileTracker[currentTileName], ...emptyTile}
                    // set player isAlive to false
                    newState.players[name].isAlive = false;
                    newState.outPlayers[name] = newState.players[name]
                    delete newState.players[name]
                    return("player")
                }
                if(player.isRotating){
                    newState.players[name].orientation = player.newOrientation
                    newState.players[name].isRotating = false; 
                }
                if(player.isMoving && !newTileIsObstruction){
                    // update player positions
                    newState.players[name].x = x;
                    newState.players[name].y = y;
                    // update tile moving into
                    newState.tileTracker[tileToCheck].isObstruction = true;
                    newState.tileTracker[tileToCheck].type = PLAYER;
                    newState.tileTracker[tileToCheck].player = player.name;
                    // update tile moving out of
                    newState.tileTracker[currentTileName] = {...newState.tileTracker[currentTileName], ...emptyTile}
                    // update player since action was completed
                    newState.players[name].isMoving = false;
                }
                if(player.isBuilding && !newTileIsObstruction){
                    newState.tileTracker[tileToCheck] = {
                        ...newState.tileTracker[tileToCheck],
                        isObstruction: true,
                        type: WALL,
                        health: GAME_PARAMS.MAX_WALL_HEALTH
                    }
                    newState.players[name].isBuilding = false;
                }
                if(player.isShooting){
                    const newProjectile = shootProjectile(player, tileToCheck)
                    newState.projectiles = [...newState.projectiles, newProjectile]
                    newState.players[name].isShooting = false;
                }
                // reset player properties used for action resolution
                newState.players[name].dx = 0;
                newState.players[name].dy = 0;
                
                return (player)
            })
            if(Object.entries(newState.players).length === 1){
                return dispatch({
                    type: END_GAME,
                    payload: {newState}
                })
            }
            return dispatch({
                type: RERENDER,
                payload: {newState}
            })
        }, 333)
        return () => clearTimeout(handleTime);
    }, [state.players, state.isRunning, state.projectiles])
}