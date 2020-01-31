import {useContext, useEffect} from "react"
import { GameContext } from "../state/context";


export default function useKeyboard(){
    const {position, setPosition} = useContext(GameContext)
    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [position]);

    function handleKeyPress(event) {
        let newPosition = position;
        switch(event.key){
            case "w":
                newPosition[0] = newPosition[0] - 1;
                //
                //
                // I think the next step is making this a database call instead of setting the position.
                //
                //
                setPosition([...newPosition])
                break
            case "s":
                newPosition[0] = newPosition[0] + 1;
                setPosition([...newPosition])
                break
            case "d":
                newPosition[1] = newPosition[1] + 1;
                setPosition([...newPosition])
                break
            case "a":
                newPosition[1] = newPosition[1] - 1;
                setPosition([...newPosition])
                break
            default:
                console.log("you hit the wrong key dog")
        }
    }
}