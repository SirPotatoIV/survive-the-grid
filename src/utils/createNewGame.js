import createState from "../state/createState.js"
import { START_GAME } from "../state/actions.js"

export default async function createNewGame(collectionRef, dispatch){
    const newState = createState(3)
    try {
        const response = await collectionRef.add(newState)
        newState["gameId"] = response.id
        // console.log("It's Working!!!", response, newState["gameId"])
        dispatch({
            type: START_GAME,
            payload: newState
        })
    } catch (error) {
        console.log(error)
    }
    
}