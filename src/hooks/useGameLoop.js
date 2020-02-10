import { useEffect } from "react"
import { GAME_PARAMS } from "../utils/constants.js"
import { RERENDER, END_GAME } from "../state/actions.js"
import {WALL, PLAYER, EMPTY, MAP_BOUNDARY} from "../maps/tileTypes.js"
import aiDecision from "../players/aiDecision.js"
import calcTileToCheck from "../utils/calcTileToCheck.js";
import shootProjectile from "../utils/shootProjectile.js"
import {useFirestore} from "../firebase/firestore"

const emptyTile = {
    type: EMPTY,
    isObstruction: false,
    player: null
}

export default function useGameLoop(state, dispatch){
    const {collectionRef} = useFirestore("game")

    async function test(newStateDB){
        console.log("test occurred")
        try {
            const doc = await collectionRef.doc("gameState")
            const response = await doc.update(newStateDB)
            console.log("Is this working", doc, response)
        } catch (error) {
            console.log(error)
        }
    }
    
    
    // const docSnapShot = testRef.get("hello")
    // console.log(docSnapShot)
    const newState = {...state}
    useEffect(() => {
        const handleTime = setTimeout(() => {
            // currently using to make sure game doesn't start until start game is pressed.
            // -- also using as a clunky way to update the tileTracker to know where each player is before the game starts
            if(!state.isRunning){
                Object.entries(newState.players).map(([key, player]) => {
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
            // checks to see how many players are remaining.
            // -- if there is only one player remaining, the game is over
            if(Object.entries(newState.players).length === 1){
                return dispatch({
                    type: END_GAME,
                    payload: {newState}
                })
            }
            // runs only if there are projectiles currently in play
            if(newState.projectiles.length !== 0){
                // removes projectiles that have already traveled 4 spaces
                const filteredProjectiles = newState.projectiles.filter(function(projectile){
                    if(projectile.distanceTraveled < GAME_PARAMS.PROJECTILE_RANGE){
                        return true
                    }
                    return false
                })
                // maps through projectiles remaining after filtering and updates position and distance traveled
                // -- if projectile collides with a wall and player, does damage to the wall or player
                const updatedProjectiles = filteredProjectiles.map(projectile => {
                    // creates a string of the name the current tile the projectile is in
                    const currentTileName = `x${projectile.x}y${projectile.y}`
                    // gets the tile the projectile is currently in
                    const currentTile = newState.tileTracker[currentTileName]
                    const tileType = currentTile.type
                    // decides what to do based on the type of tile the projectile is currently in
                    switch(tileType){
                        case EMPTY:
                            projectile.x = projectile.x+projectile.dx;
                            projectile.y = projectile.y+projectile.dy;
                            projectile.distanceTraveled++
                            break
                        case WALL:
                            newState.tileTracker[currentTileName].health--
                            // if wall has a health of 0, turns the tile into an empty tile
                            if(newState.tileTracker[currentTileName].health === 0){
                                // updates tile to an empty tile now that it should no longer be a wall
                                // spreads the current tile properties and adds the properties of the variable empty tile (see near top of code)
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
                            projectile.distanceTraveled = GAME_PARAMS.PROJECTILE_RANGE;
                            break
                    }
                    return(projectile)
                })
                // sets newState projectiles to the updated projectiles
                newState.projectiles = updatedProjectiles;
            }
            // =====================================
            // AI makes decisions
            newState.players = aiDecision(newState, dispatch)
            //=====================================================
             
            // code below used to go through each player and decide whether they can take the action
            // ... they are trying to perform and what are the outcomes of those actions
            // -- also checks if the player is still alive
            Object.entries(newState.players).map(([key, player]) => {
                const name = player.name
                // calculates players potential new position
                const x = player.x+player.dx;
                const y = player.y+player.dy;
                // creates a string that represets the name of the current tile the player is in
                const currentTileName = `x${player.x}y${player.y}`
                // creates a string that represents the name of the potential tile the player will move into 
                const tileToCheck = calcTileToCheck(player)
                const newTileIsObstruction = newState.tileTracker[tileToCheck].isObstruction
                // Check is player is still alive
                if(player.health <= 0){
                    // update tileTracker to indicate there is no longer a player in the tile
                    newState.tileTracker[currentTileName] = {...newState.tileTracker[currentTileName], ...emptyTile}
                    // set player isAlive to false
                    newState.players[name].isAlive = false;
                    // make a copy of the player in outPlayers
                    newState.outPlayers[name] = newState.players[name]
                    // delete the player from the players object so it can no longer make actions
                    delete newState.players[name]
                    // this currently does nothing. It's just to stop VS Code from complaining that a map function doesn't have a return.
                    return("player")
                }
                // checks to see if player is trying to rotate
                if(player.isRotating){
                    // there really isn't any reason to not let the player rotate. If isRotating is true, currently player always rotates.
                    newState.players[name].orientation = player.newOrientation
                }
                // checks to see if player is trying to move and if the tile they are trying to move into is NOT an obstruction
                if(player.isMoving && !newTileIsObstruction){
                    // update player position
                    newState.players[name].x = x;
                    newState.players[name].y = y;
                    // update tile moving into
                    newState.tileTracker[tileToCheck].isObstruction = true;
                    newState.tileTracker[tileToCheck].type = PLAYER;
                    newState.tileTracker[tileToCheck].player = player.name;
                    // update tile moving out of to an empty tile
                    newState.tileTracker[currentTileName] = {...newState.tileTracker[currentTileName], ...emptyTile}
                }
                // checks to see if player is trying to build a wall and if the tile they are trying to build in is NOT an obstruction
                if(player.isBuilding && !newTileIsObstruction){
                    newState.tileTracker[tileToCheck] = {
                        ...newState.tileTracker[tileToCheck],
                        isObstruction: true,
                        type: WALL,
                        health: GAME_PARAMS.MAX_WALL_HEALTH
                    }
                }
                // checks to see if player is trying to shoot. There is no reason for the player to be able to shoot. Action always occurs
                if(player.isShooting){
                    const newProjectile = shootProjectile(player, tileToCheck)
                    newState.projectiles = [...newState.projectiles, newProjectile]
                }
                // reset player properties used for action resolution
                newState.players[name] ={
                    ...newState.players[name],
                    dx: 0,
                    dy: 0,
                    newOrientation: 0,
                    isBuilding: false,
                    isMoving: false,
                    isShooting: false,
                    isRotating: false
                }
                return (player)
            })
            // send updates to firebase
            // test(newState)
            // sends updated state to reducer to make state equal to newState
            return dispatch({
                type: RERENDER,
                payload: {newState}
            })
        // sets the time for the timeout in milliseconds
        }, 1000)
        // clears the timeout so tons of timeouts do not start
        return () => clearTimeout(handleTime);
        // tells the useEffect when it should occur
    }, [state.players, state.isRunning, state.projectiles])
}