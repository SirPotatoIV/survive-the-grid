import React, {useContext} from "react"
import {Box} from 'grommet';
// import {Home, Notification} from 'grommet-icons';
import Grid from '../Grid'
import PlayerCard from "../PlayerCard"
import GameController from "../GameController"
import {GameContext} from "../../state/context"

function Dashboard(props){
    
    const { state } = useContext(GameContext)

    return(
    <>
        <Box
            pad={{left: 'medium', right: 'small', vertical: 'small'}}
            direction="row"
            justify="center"
        >
            <Box>
                <h1>Alive Players</h1>
                <Box className="PlayerCardContainer" direction="column">
                    {Object.entries(state.players).map(([key, player]) => { 
                            return (<PlayerCard
                                key={player.name}
                                player={player}
                            />)
                        })}
                </Box>
            </Box>
            
            <Grid/>

            <Box>
                <h1>Out Players</h1>
                <Box className="PlayerCardContainer" direction="column">
                    {Object.entries(state.outPlayers).map(([key, player]) => { 
                            return (<PlayerCard
                                key={player.name}
                                player={player}
                            />)
                        })}
                </Box>
            </Box>
            
        </Box>
    <GameController/>
    </>
    )
}
export default Dashboard;