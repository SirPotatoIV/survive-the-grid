import React, {useEffect, useState} from 'react';
import "./style.css"
import playerImage from "./player.png"

function Player(){
    const [position, setPosition] = useState([2,3])

    function handleKey(e) {
        let newPosition = position;
        console.log(e.key)
        switch(e.key){
            case "w":
                newPosition[1] = newPosition[1] + 1;
                setPosition(newPosition)
                break
            case "s":
                newPosition[1] = newPosition[1] - 1;
                setPosition(newPosition)
                break
            default:
                console.log("you hit the wrong key dog")
        }
        console.log(newPosition)
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
      }, [position]);

    return(
        <div className="tile"   
            style={{
                gridRowStart:`${position[0]}`,
                gridRowEnd: `${position[0]+1}`,
                gridColumnStart: `${position[1]}`,
                gridColumnEnd: `${position[1]+1}`
            }} >
            <img 
                src = {playerImage}
                alt = "player"
                height = "50px"
                width = "50px"

            />
        </div>
    )
}
export default Player;