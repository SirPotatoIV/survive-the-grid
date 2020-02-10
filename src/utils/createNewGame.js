import createState from "../state/createState.js"
import { START_GAME } from "../state/actions.js"

export default async function createNewGame(collectionRef, dispatch){
    let gameId = 0;
    const newState = createState(4)
    try {
        const response = await collectionRef.add(newState)
        gameId = response.id
        console.log("It's Working!!!", response)
    } catch (error) {
        console.log(error)
    }
    
    dispatch({
        type: START_GAME,
        payload: "test"
    })
    return(gameId)
}