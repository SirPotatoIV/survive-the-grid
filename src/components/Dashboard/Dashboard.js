import React, {useContext} from "react"
import {Box, Header} from 'grommet';
// import {Home, Notification} from 'grommet-icons';
import Grid from '../Grid'
import PlayerCard from "../PlayerCard"
import GameController from "../GameController"
import {GameContext} from "../../state/context"
import useKeyboard from "../../hooks/useKeyboard"

function Dashboard(props){
    const { state, dispatch, currentUser } = useContext(GameContext)
    useKeyboard(state, dispatch)
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
        <Header>{state.gameId}</Header>
    </>
    )
}
export default Dashboard;