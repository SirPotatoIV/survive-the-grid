import React, { createContext, useReducer, useContext } from "react"
import reducer from "./reducer"
import createState from "./createState"
// import useKeyboard from "../hooks/useKeyboard"

const GameContext = createContext();
// creates the initial state of the game, which is used as an argument for useReducer
const initialState = createState()

export const GameProvider = ({ children }) => {
    return (
        <GameContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </GameContext.Provider>
    )
}
export const useStateValue = () => useContext(GameContext)