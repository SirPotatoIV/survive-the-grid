import React from 'react';
import "./Projectile.css"
import rocketImage from "./rocket.png"

function Projectile(props){
    
    const projectileState = props.projectileState
    return(
        <div   
            style={{
                gridRowStart:`${projectileState.y}`,
                gridRowEnd: `${projectileState.y+1}`,
                gridColumnStart: `${projectileState.x}`,
                gridColumnEnd: `${projectileState.x+1}`,
                zIndex: 100,
                transform: `rotate(${projectileState.orientation}deg)`
            }} 
            className="projectile"
        >
            <img 
                src = {rocketImage}
                alt = "projectile"
                height = "auto"
                width = "30px"
            />
        </div>
    )
}
export default Projectile;