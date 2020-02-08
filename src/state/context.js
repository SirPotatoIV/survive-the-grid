import React, { createContext, useReducer } from "react"
import useGameLoop from "../hooks/useGameLoop.js"
import reducer from "./reducer"
import createState from "./createState"
// import useKeyboard from "../hooks/useKeyboard"

export const GameContext = createContext();
// creates the initial state of the game, which is used as an argument for useReducer
const initialState = createState()

export default function GameProvider(props){

    const [state,dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch};

    useGameLoop(state,dispatch)

    return (
        <GameContext.Provider value={value} {...props}/>   
    )
}