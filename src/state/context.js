import React, {createContext} from "react"

export const GameContext = createContext();

export default function GameProvider(props){
    
    return(
        <GameContext.Provider value={"hello"} {...props}/>
    )
}