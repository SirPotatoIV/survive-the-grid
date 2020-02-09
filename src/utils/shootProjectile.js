export default function shootProjectile(player, tileToCheck){
    const newProjectile = {
        player: player.name,
        distanceTraveled: 0,
        dx: 0,
        dy: 0,
        x: parseInt(tileToCheck.charAt(1), 10),
        y: parseInt(tileToCheck.charAt(3), 10),
        orientation: player.orientation
    }
    switch(player.orientation){
        case 0:
            newProjectile.dy = -1;
            break
        case 180:
            newProjectile.dy = 1;
            break
        case 90:
            newProjectile.dx = 1;
            break
        case 270:
            newProjectile.dx = -1;
            break
        default:
            console.log("a projectile can't go that way fool")    
    }
    return(newProjectile)
}