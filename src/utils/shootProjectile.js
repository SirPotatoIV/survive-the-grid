export default function shootProjectile(state){
    //detect orientation
    if(state.player.position.orientation === 0){
        console.log("shot north")
        
        const newProjectile = {
            player: state.player.name,
            distanceTraveled: 0,
            shouldExist: true,
            x: state.player.position.x,
            y: state.player.position.y -1,
            orientation: 0
        }
        return(newProjectile)
    }
}