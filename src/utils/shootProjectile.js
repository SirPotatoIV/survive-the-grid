export default function shootProjectile(state){
    //detect orientation
    const player = state.players.main;
    if(player.orientation === 0){
        
        const newProjectile = {
            player: state.player.name,
            distanceTraveled: 0,
            x: player.x,
            y: player.y,
            orientation: player.orientation
        }
        return(newProjectile)
    }

    if(player.orientation === 180){
       
        const newProjectile = {
            player: state.player.name,
            distanceTraveled: 0,
            x: player.x,
            y: player.y,
            orientation: player.orientation
        }
        return(newProjectile)
    }

    if(player.orientation === 90){
        
        const newProjectile = {
            player: state.player.name,
            distanceTraveled: 0,
            x: player.x,
            y: player.y,
            orientation: player.orientation
        }
        return(newProjectile)
    }

    if(player.orientation === 270){
        
        const newProjectile = {
            player: state.player.name,
            distanceTraveled: 0,
            x: player.x,
            y: player.y,
            orientation: player.orientation
        }
        return(newProjectile)
    }
}