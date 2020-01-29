import React, {createContext, useState} from "react"

export const GameContext = createContext();

export default function GameProvider(props){
    const [position, setPosition] = useState([2,3])
    
    return(
        <GameContext.Provider value={{position, setPosition}} {...props}/>
    )
}