import React, {useContext} from "react"
import {Box, Button, Heading } from 'grommet';
import { GameContext } from "../../state/context";

function HomePageLinks(props){
    const {currentUser} = useContext(GameContext)
    if(currentUser){
        return(
            <>
                <Box
                    justify="center"
                >
                    <Heading alignSelf="center" level="3" margin={{vertical: "small"}} textAlign="center" size="small">
                        An attempt at a 2D Battle Royale. Game in Development. You are already logged in. Select Play to get started. Currently can only play against AI or spectate while someone else plays.
                        Check out the About section to learn more about the game's development. 
                    </Heading>
                </Box>
                <Box 
                    direction="row"
                    justify="center"
                    pad="medium"    
                >
                    <Button alignSelf="center" margin="small" label="Play" href="/dashboard" primary="true" />
                    <Button alignSelf="center" margin="small" label="Spectate" href="/spectator" />
                    <Button alignSelf="center" margin="small" label="About" href="/about" />
                </Box>
            </>
        )
    }
    return(
        <>
            <Box
                justify="center"
                >
                <Heading alignSelf="center" level="3" margin={{vertical: "small"}} textAlign="center" size="small">
                    An attempt at a 2D Battle Royale. Game in Development. Log in or sign up to play. Currently can only play against AI or spectate while someone else plays.
                    Check out the About section to learn more about the game's development. 
                </Heading>
            </Box>
            <Box 
                direction="row"
                justify="center"
                pad="medium"    
            >
                <Button alignSelf="center" margin="small" label="Log In" href="/login" />
                <Button alignSelf="center" margin="small" label="Sign Up" href="/signup" />
                <Button alignSelf="center" margin="small" label="About" href="/about" />
            </Box>
        </>
    )
}
export default HomePageLinks;