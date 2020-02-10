import React, { createContext, useReducer, useState } from "react"
import useGameLoop from "../hooks/useGameLoop.js"
import reducer from "./reducer"
import createState from "./createState"
import useKeyboard from "../hooks/useKeyboard.js";
// import useKeyboard from "../hooks/useKeyboard"

export const GameContext = createContext();
// creates the initial state of the game, which is used as an argument for useReducer
const initialState = createState(4)

export default function GameProvider(props){
    const [gameId, setGameId] = useState(0)
    const [state,dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch, gameId, setGameId};
    
    useKeyboard(state, dispatch)
    useGameLoop(state, dispatch)

    return (
        <GameContext.Provider value={value} {...props}/>   
    )
}