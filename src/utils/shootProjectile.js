export default function shootProjectile(state){
    //detect orientation
    if(state.player.position.orientation === 0){
        
        const newProjectile = {
            player: state.player.name,
            distanceTraveled: 0,
            x: state.player.position.x,
            y: state.player.position.y -1,
            orientation: state.player.position.orientation
        }
        return(newProjectile)
    }

    if(state.player.position.orientation === 180){
       
        const newProjectile = {
            player: state.player.name,
            distanceTraveled: 0,
            x: state.player.position.x,
            y: state.player.position.y + 1,
            orientation: state.player.position.orientation
        }
        return(newProjectile)
    }

    if(state.player.position.orientation === 90){
        
        const newProjectile = {
            player: state.player.name,
            distanceTraveled: 0,
            x: state.player.position.x + 1,
            y: state.player.position.y,
            orientation: state.player.position.orientation
        }
        return(newProjectile)
    }

    if(state.player.position.orientation === 270){
        
        const newProjectile = {
            player: state.player.name,
            distanceTraveled: 0,
            x: state.player.position.x - 1,
            y: state.player.position.y,
            orientation: state.player.position.orientation
        }
        return(newProjectile)
    }
}