import { MOVE_PLAYER, BUILD_WALL, SHOOT_PROJECTILE } from "../state/actions"
import { DIRECTIONS } from "../utils/constants"
import moveAi from "../players/moveAi"

export default function aiDecision(newState){
    // creates a new object of the players to avoid mutating the object newState ... may not be necessary, but just in case
    const updatedPlayers = {...newState.players}
    const directions = [DIRECTIONS.NORTH, DIRECTIONS.SOUTH, DIRECTIONS.WEST, DIRECTIONS.EAST]
    
    // used to select a random action for the ai to perform
    function selectRandomAction(){
        // all possible actions the ai can perform
        const actions = [MOVE_PLAYER, BUILD_WALL, SHOOT_PROJECTILE];
        // calculate a random indice of the array actions
        const randomActionSelector = Math.floor(Math.random()*actions.length)
        // use the random indice to get the random action
        const randomAction = actions[randomActionSelector]
        return(randomAction)
    }
   
    // loop through the object in state that contains all of the players
    // Currently using map, but there is probably a better solution
    Object.entries(updatedPlayers).map(([key, player]) => {
        // gets a player from the object. Since I am mapping through an object can't just use player, becaue player is just a property of the object updatedPlayers
        let updatedPlayer = updatedPlayers[player.name] 
        // gets random action
        const action = selectRandomAction()
        // run specific code based on random action
        switch(action){
            case MOVE_PLAYER:
                // calculate a random indice of the array directions
                const randomDirectionSelector = Math.floor(Math.random()*directions.length)
                // use the random indice to get the random action
                const randomDirection = directions[randomDirectionSelector];
                // pass player name, random direction and newState to function moveAi
                // -- moveAi decides wether the player should rotate or move based on current orientation and direction selected
                updatedPlayer = moveAi(player.name, randomDirection, newState)
                // updates player ... this is due to mapping through an object.
                updatedPlayers[player.name] = updatedPlayer
                return("player")
            case BUILD_WALL:
                updatedPlayer.isBuilding = true;
                return("player")
            case SHOOT_PROJECTILE:
                updatedPlayer.isShooting = true;
                return("player")
            default:
                console.log("silly computer, that isn't a move")
        }
        // Currently doesn't actually do anything. Just causes VS Code to stop complaining
        return("player")
    })
    return updatedPlayers
}