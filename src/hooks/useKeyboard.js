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
        switch(event.key){
            case "w":
                if(player.position.orientation === 0){
                    player.position.x = player.position.x - 1;
                }else{
                    player.position.orientation = 0;
                }
                dispatch({
                    type: "move",
                    payload: player
                })
                break
            case "s":
                if(player.position.orientation === 180){
                    player.position.x = player.position.x + 1;
                }else{
                    player.position.orientation = 180;
                    console.log(player)
                }
                dispatch({
                    type: "move",
                    payload: player
                })
                break
            case "d":
                if(player.position.orientation === 90){
                    player.position.y = player.position.y + 1;
                }else{
                    player.position.orientation = 90;
                    console.log(player)
                }
                dispatch({
                    type: "move",
                    payload: player
                })
                break
            case "a":
                if(player.position.orientation === 270){
                    player.position.y = player.position.y - 1;
                }else{
                    player.position.orientation = 270;
                    console.log(player)
                }
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