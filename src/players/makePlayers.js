import random from "random-name"
const startPositions = [[2,2], [5,2], [2,5], [5,5]]

const imageString = ["tank", "tank2", "tank3", "tank4"]

export default function makePlayers(numberOfAiPlayers){
 
// const characterName = uniqueNamesGenerator(config); // Han Solo
    let playerNames = [];
    
    for(let i = 0; i < numberOfAiPlayers; i++){
        playerNames.push(random.first())
    }
    
    const playerArray = playerNames.map(function(playerName, index){
        return({
                name: playerName,
                type: "ai",
                imageString: imageString[index],
                dx: 0,
                dy: 0,
                newOrientation: 0,
                x: startPositions[index][0],
                y: startPositions[index][1],
                orientation: 180,
                health: 3,
                isAlive: true,
                isMoving: false,
                isRotating: false,
                isBuilding: false,
                isShooting: false
        })
    })
    const players = {};
    for(let i = 0; i < playerArray.length; i ++){
        players[playerArray[i].name] = playerArray[i];
    }
    return(players)
}