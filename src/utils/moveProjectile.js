import projectileCollision from "../utils/projectileCollision"

export default function moveProjectile(state, projectile){
    // PROJECTILE OBJECT STRUCTURE FOR REFERENCE
    // const newProjectile = {
    //     player: state.player.name,
    //     distanceTraveled: 0,
    //     x: state.player.position.x,
    //     y: state.player.position.y -1,
    //     orientation: 0
    // }

    if(projectile.orientation === 0){
        const futureProjectileState = {
            ...projectile,
            y: projectile.y - 1,
            distanceTraveled: projectile.distanceTraveled + 1 
        }
        console.log(projectile.distanceTraveled, futureProjectileState.distanceTraveled)
        const updatedProjectile = projectileCollision(state, futureProjectileState)
        // update projectile position
        // const updatedProjectile = {
        //     ...projectile, 
        //     y: projectile.y - 1, 
        //     distanceTraveled: projectile.distanceTraveled + 1 
        // };
        return(updatedProjectile)
    }

    if(projectile.orientation === 180){
        // update projectile position
        const updatedProjectile = {
            ...projectile, 
            y: projectile.y + 1, 
            distanceTraveled: projectile.distanceTraveled + 1 
        };
        return(updatedProjectile)
    }

    if(projectile.orientation === 90){
        // update projectile position
        const updatedProjectile = {
            ...projectile, 
            x: projectile.x + 1, 
            distanceTraveled: projectile.distanceTraveled + 1 
        };
        return(updatedProjectile)
    }

    if(projectile.orientation === 270){
        // update projectile position
        const updatedProjectile = {
            ...projectile, 
            x: projectile.x - 1, 
            distanceTraveled: projectile.distanceTraveled + 1 
        };
        return(updatedProjectile)
    }
}