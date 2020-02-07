export default function checkPlayerCollision(player, state){
    const updatedPlayer = {...player}
    if(player.dx === 0 && player.dy === 0){
        return(updatedPlayer)
    }
    const x = updatedPlayer.x + updatedPlayer.dx;
    const y = updatedPlayer.y + updatedPlayer.dy;

    const futureTile = state.tileTracker[`x${x}y${y}`];
    console.log(futureTile);
}