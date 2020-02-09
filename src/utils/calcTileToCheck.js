export default function calcTileToCheck(object){
    // deconstruction the values from the object to make code easier to read
    const { x, y, orientation} = object

    if(orientation === 0){
        // get name of tile in front of the object
        const tileName = `x${x}y${y - 1}`
        return(tileName)
    }

    if(orientation === 180){
        // get name of tile in front of the object
        const tileName = `x${x}y${y + 1}`
        return(tileName)
    }

    if(orientation === 90){
        // get name of tile in front of the object
        const tileName = `x${x + 1}y${y}`
        return(tileName)
    }

    if(orientation === 270){
        // get name of tile in front of the object
        const tileName = `x${x - 1}y${y}`
        return(tileName)
    }
}