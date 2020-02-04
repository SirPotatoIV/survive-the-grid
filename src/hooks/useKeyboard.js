import {useContext, useEffect} from "react"
import { GameContext } from "../state/context";


export default function useKeyboard(){
    const {state, dispatch} = useContext(GameContext)
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

    function handleKeyPress(event) {
        const player = {...state.player}
        console.log(player)
        switch(event.key){
            case "w":
                player.position.x = player.position.x - 1;
                dispatch({
                    type: "move",
                    payload: player
                })
                break
            case "s":
                player.position.x = player.position.x + 1;
                dispatch({
                    type: "move",
                    payload: player
                })
                break
            case "d":
                player.position.y = player.position.y + 1;
                dispatch({
                    type: "move",
                    payload: player
                })
                break
            case "a":
                player.position.y = player.position.y - 1;
                dispatch({
                    type: "move",
                    payload: player
                })
                break
            default:
                console.log("you hit the wrong key dog")
        }
    }
}