import React, {useContext} from "react"
import {Box, Heading} from 'grommet';
// import {Home, Notification} from 'grommet-icons';
import {Link} from 'react-router-dom'
import Grid from '../Grid'
import PlayerCard from "../PlayerCard"
import {GameContext} from "../../state/context"

function Dashboard(props){
    
    const { state } = useContext(GameContext)

    return(
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
            <div className="PlayerCardContainer">
                {Object.entries(state.outPlayers).map(([key, player]) => { 
                        return (<PlayerCard
                            key={player.name}
                            player={player}
                        />)
                    })}
            </div>
        </Box>
    </Box>
    )
}
export default Dashboard;