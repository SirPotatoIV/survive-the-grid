import { MOVE_PLAYER, BUILD_WALL, SHOOT_PROJECTILE} from "../state/actions"
import { DIRECTIONS } from "../utils/constants"
import moveAi from "../players/moveAi"

export default function aiDecision(newState){
    const updatedPlayers = {...newState.players}
    const directions = [DIRECTIONS.NORTH, DIRECTIONS.SOUTH, DIRECTIONS.WEST, DIRECTIONS.EAST]
    
    function selectRandomAction(){
        const actions = [MOVE_PLAYER, BUILD_WALL, SHOOT_PROJECTILE];
        const randomActionSelector = Math.floor(Math.random()*actions.length)
        const randomAction = actions[randomActionSelector]
        return(randomAction)
    }
    
    Object.entries(updatedPlayers).map(([key, player]) => {
        let updatedPlayer = updatedPlayers[player.name] 
        const action = selectRandomAction()
        switch(action){
            case MOVE_PLAYER:
                const randomDirectionSelector = Math.floor(Math.random()*directions.length)
                const randomDirection = directions[randomDirectionSelector];
                updatedPlayer = moveAi(player.name, randomDirection, newState)
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
        return("player")
    })
    return updatedPlayers
}