import random from "random-name"
import {ComputerPlayer} from "./ComputerPlayer"
import Player from "./Player"
const startPositions = [{x:5, y:2}, {x:2, y:5}, {x:5 , y:5}, {x:2, y:2}]

const imageString = ["tank2", "tank3", "tank4", "tank"]

export default function makePlayers(numberOfAiPlayers){
 
    const computerPlayerNames = ["AI_1", "AI_2", "AI_3", "AI_4"];
    let computerNames = [];
    
    for(let i = 0; i < numberOfAiPlayers; i++){
        computerNames.push(computerPlayerNames[i])
    }
    
    const playerArray = computerNames.map(function(computerName, index){
        const computerPlayer = new ComputerPlayer(computerName, startPositions[index], imageString[index])
        return(computerPlayer)
    })
    
    if(numberOfAiPlayers < 4){
        const humanPlayer = new Player("main", startPositions[3], imageString[3])
        playerArray.push(humanPlayer)
    }
    console.log(playerArray)
    const players = {};
    for(let i = 0; i < playerArray.length; i ++){
        players[playerArray[i].name] = {...playerArray[i]};
    }
    console.log(players)
    return(players)
}