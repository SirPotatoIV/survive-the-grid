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
        // calculate future projectile state if it doesn't collide
        const futureProjectileState = {
            ...projectile,
            y: projectile.y - 1,
            distanceTraveled: projectile.distanceTraveled + 1 
        }
        // check if projectile will collide and get projectile state
        const updatedProjectile = projectileCollision(state, futureProjectileState)
        return(updatedProjectile)
    }

    if(projectile.orientation === 180){
        // calculate future projectile state if it doesn't collide
        const futureProjectileState = {
            ...projectile,
            y: projectile.y + 1,
            distanceTraveled: projectile.distanceTraveled + 1 
        }
        // check if projectile will collide and get projectile state
        const updatedProjectile = projectileCollision(state, futureProjectileState)
        return(updatedProjectile)
    }

    if(projectile.orientation === 90){
        // calculate future projectile state if it doesn't collide
        const futureProjectileState = {
            ...projectile,
            x: projectile.x + 1,
            distanceTraveled: projectile.distanceTraveled + 1 
        }
        // check if projectile will collide and get projectile state
        const updatedProjectile = projectileCollision(state, futureProjectileState)
        return(updatedProjectile)
    }

    if(projectile.orientation === 270){
        // calculate future projectile state if it doesn't collide
        const futureProjectileState = {
            ...projectile,
            x: projectile.x - 1,
            distanceTraveled: projectile.distanceTraveled + 1 
        }
        // check if projectile will collide and get projectile state
        const updatedProjectile = projectileCollision(state, futureProjectileState)
        return(updatedProjectile)
    }
}