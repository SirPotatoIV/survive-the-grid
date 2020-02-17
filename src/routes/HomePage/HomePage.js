import React from "react"
import {Box, Button, Heading, Text} from 'grommet';
// import {Home, Notification} from 'grommet-icons';

function HomePage(props){

    return(
    <>
        <Box
            alignSelf="center"
            background="accent-1"
            direction="column"
            justify="center"
            pad={{left: 'medium', right: 'small', vertical: 'xlarge'}}
        >

            <Heading textAlign="center" size="xlarge">Survive The Grid.</Heading>
        </Box>
        <Box
            justify="center"
            >
            <Heading alignSelf="center" level="3" margin={{vertical: "small"}} textAlign="center" size="small">
                An attempt at a 2D Battle Royale. Game in Development. Log in or sign up to play. Currently can only play against AI or spectate while someone else plays. 
            </Heading>
        </Box>
        <Box 
            direction="row"
            justify="center"
            pad="medium"    
        >
            <Button alignSelf="center" margin="small" justify="center" label="Spectate" href="/spectate" />
            <Button alignSelf="center" margin="small" label="Log In" href="/login" />
            <Button alignSelf="center" margin="small" label="Sign Up" href="/signup" />
        </Box>
    </>
    )
}
export default HomePage;