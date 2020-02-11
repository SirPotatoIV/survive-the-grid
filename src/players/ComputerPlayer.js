import Player from "./Player"
import { BUILD_WALL, SHOOT_PROJECTILE } from "../state/actions"
import { DIRECTIONS } from "../utils/constants"
import movePlayer from "../utils/movePlayer"

export class ComputerPlayer extends Player {
    constructor(...args){
        super(...args)
        // this.name = random.first()
        this.type = "AI"
    }

    makeDecision(state, dispatch){
        const intervals = [300, 400, 500];
        const randomInterval = Math.floor(Math.random()*intervals.length);
        const interval = intervals[randomInterval];

        const directions = [DIRECTIONS.NORTH, DIRECTIONS.SOUTH, DIRECTIONS.WEST, DIRECTIONS.EAST]

        function selectRandomAction(){
            // all possible actions the ai can perform
            const actions = [BUILD_WALL, SHOOT_PROJECTILE, ...directions];
            // calculate a random indice of the array actions
            const randomActionSelector = Math.floor(Math.random()*actions.length)
            // use the random indice to get the random action
            const randomAction = actions[randomActionSelector]
            return(randomAction)
        }
        
        setTimeout(()=>{
            const action = selectRandomAction()

            switch(action){
                case DIRECTIONS.NORTH:
                    movePlayer(this.name, DIRECTIONS.NORTH, this.y, this.x, this.orientation, dispatch)
                    break
                case DIRECTIONS.SOUTH:
                    movePlayer(this.name, DIRECTIONS.SOUTH, state, dispatch)
                    break
                case DIRECTIONS.EAST:
                    movePlayer(this.name, DIRECTIONS.EAST, state, dispatch)
                    break
                case DIRECTIONS.WEST:
                    movePlayer(this.name, DIRECTIONS.WEST, state, dispatch)
                    break
                case BUILD_WALL:
                    return dispatch({
                        type: BUILD_WALL,
                        payload: this.name
                    })
                case SHOOT_PROJECTILE:
                    return dispatch({
                        type: SHOOT_PROJECTILE,
                        payload: this.name
                    })
                default:
                    console.log("silly computer, that isn't a move")
            }
        },[interval])
    }
}