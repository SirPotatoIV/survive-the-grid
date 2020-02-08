const startPositions = [[2,2], [2,9], [9,2], [9,9]]

export default function makePlayers(playerNames){
    const playerArray = playerNames.map(function(playerName, index){
        return({
                name: playerName,
                dx: 0,
                dy: 0,
                newOrientation: 0,
                x: startPositions[index][0],
                y: startPositions[index][1],
                orientation: 180,
                health: 3,
                isAlive: true,
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