// players: {
//     main: {
//         name: "main",
//         x: 2,
//         y: 2,
//         orientation: 180,
//         health: 3
//     }
// },

const playerNames = ["main"];
const startPositions = [[2,2], [2,9], [9,2], [9,9]]
export default function makePlayers(){
    const playerArray = playerNames.map(function(playerName, index){
        return({
                name: playerName,
                dx: 0,
                dy: 0,
                x: startPositions[index][0],
                y: startPositions[index][1],
                orientation: 180,
                health: 3
        })
    })
    const players = {};
    for(let i = 0; i < playerArray.length; i ++){
        players[playerArray[i].name] = playerArray[i];
    }
    console.log(players)
    return(players)
}