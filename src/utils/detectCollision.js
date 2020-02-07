export default function detectCollision(state, x, y){
    const targetTile = `x${x}y${y}`
    if(state.tileTracker[targetTile].isObstruction){
        return("obstruction")
    }
    return("not obscruction")
}