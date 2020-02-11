import random from "random-name"
import {GAME_PARAMS} from "../utils/constants"
import {ComputerPlayer} from "./ComputerPlayer"
import Player from "./Player"
const startPositions = GAME_PARAMS.START_POSITIONS

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
    return({players, playerArray})
}