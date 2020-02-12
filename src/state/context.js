import React, { createContext, useEffect, useReducer, useState } from "react"
import useGameLoop from "../hooks/useGameLoop.js"
import reducer from "./reducer"
import createState from "./createState"
import {firebase} from "../firebase/index"

export const GameContext = createContext();
// creates the initial state of the game, which is used as an argument for useReducer
const initialState = createState(4)

export default function GameProvider(props){
    const [currentUser, setCurrentUser] = useState("")
    const [state,dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch, currentUser};
    
    useGameLoop(state, dispatch)
    // watched video for tips on how to set up authentication this way https://www.youtube.com/watch?v=unr4s3jd9qA
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(setCurrentUser);
    }, [])

    return (
        <GameContext.Provider value={value} {...props}/>   
    )
}