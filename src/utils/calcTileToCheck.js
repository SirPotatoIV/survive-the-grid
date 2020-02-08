export default function calcTileToCheck(player){
    // deconstruction the values from the player to make code easier to read
    const { x, y, orientation} = player

    if(orientation === 0){
        // get name of tile in front of the player
        const tileName = `x${x}y${y - 1}`
        return(tileName)
    }

    if(orientation === 180){
        // get name of tile in front of the player
        const tileName = `x${x}y${y + 1}`
        return(tileName)
    }

    if(orientation === 90){
        // get name of tile in front of the player
        const tileName = `x${x + 1}y${y}`
        return(tileName)
    }

    if(orientation === 270){
        // get name of tile in front of the player
        const tileName = `x${x - 1}y${y}`
        return(tileName)
    }
}