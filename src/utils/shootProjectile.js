export default function shootProjectile(state){
    const player = state.players.main;
    return({
        player: player.name,
        distanceTraveled: 0,
        dx: 0,
        dy: 0,
        x: player.x,
        y: player.y,
        orientation: player.orientation
    })
}