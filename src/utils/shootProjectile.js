export default function shootProjectile(player, tileToCheck){
    console.log(tileToCheck)
    return({
        player: player.name,
        distanceTraveled: 0,
        dx: 0,
        dy: 0,
        x: parseInt(tileToCheck.charAt(1), 10),
        y: parseInt(tileToCheck.charAt(3), 10),
        orientation: player.orientation
    })
}