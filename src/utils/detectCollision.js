

export default function detectCollision(state, x, y){
    const targetTile = `x${x}y${y}`
    if(state.tileTracker[targetTile].isObstruction){
        console.log(targetTile + "there is an obstruction")
        return("obstruction")
    }else{
        console.log("path is clear")
        return("not obscruction")
    }
}