

export default function detectCollision(state, x, y){
    const targetTile = `x${x}y${y}`
    if(state.tileTracker[targetTile].isObstruction){
        return("obstruction")
    }else{
        return("not obscruction")
    }
}