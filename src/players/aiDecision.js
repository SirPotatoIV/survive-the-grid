import { MOVE_PLAYER} from "../state/actions"
import { DIRECTIONS } from "../utils/constants"
import moveAi from "../players/moveAi"

export default function aiDecision(newState){
    const updatedPlayers = {...newState.players}
    const directions = [DIRECTIONS.NORTH, DIRECTIONS.SOUTH, DIRECTIONS.WEST, DIRECTIONS.EAST]
    
    function selectRandomAction(){
        const actions = [MOVE_PLAYER];
        const randomActionSelector = Math.floor(Math.random()*actions.length)
        const randomAction = actions[randomActionSelector]
        return(randomAction)
    }
    
    Object.entries(updatedPlayers).map(([key, player]) => {
        const action = selectRandomAction()
        switch(action){
            case MOVE_PLAYER:
                const randomDirectionSelector = Math.floor(Math.random()*directions.length)
                const randomDirection = directions[randomDirectionSelector];
                const updatedPlayer = moveAi(player.name, randomDirection, newState)
                updatedPlayers[player.name] = updatedPlayer
                break
            default:
                console.log("silly computer, that isn't a move")
        }
        return("player")
    })
    return updatedPlayers
}