import React, {createContext, useReducer} from "react"
import reducer from "./reducer"
import createState from "./createState"
// import useKeyboard from "../hooks/useKeyboard"

export const GameContext = createContext();
// creates the initial state of the game, which is used as an argument for useReducer
const initialState = createState()

export default function GameProvider(props){
    // contains state of players position
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <GameContext.Provider value={{state, reducer, dispatch}} {...props}/>
    )
}