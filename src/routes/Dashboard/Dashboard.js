import React, {useContext} from "react"
import {Box, Heading, Text} from 'grommet';
// import {Home, Notification} from 'grommet-icons';
import Grid from '../../components/Grid'
import PlayerCard from "../../components/PlayerCard"
import GameController from "../../components/GameController"
import {GameContext} from "../../state/context"
import useKeyboard from "../../hooks/useKeyboard"

function Dashboard(props){
    const { state, dispatch } = useContext(GameContext)
    useKeyboard(state, dispatch)
    return(
    <>
        <Box>
            <Heading
                alignSelf="center"
                textAlign="center"    
                background="accent-1"
                >
                    Play Mode
            </Heading>
        </Box>
        <Box
            pad={{left: 'medium', right: 'small', vertical: 'small'}}
            direction="row"
            justify="center"
        >
            <Box>
                <Heading size="small">Alive Players</Heading>
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
                <Heading size="small">Out Players</Heading>
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
        <Box>
            
            <Text textAlign="center" weight="bold">Game ID: </Text><Text>{state.gameId}</Text>
        </Box>
        <GameController/>
    </>
    )
}
export default Dashboard;