import React from "react"
import {Box, Heading, Button} from 'grommet';
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

            <Heading size="xlarge">Survive The Grid.</Heading>
        </Box>
            <Box 
                direction="row"
                justify="center"
                pad="xlarge"    
            >
                <Button alignSelf="center" margin="small" justify="center" label="Spectate" href="/spectate" />
                <Button alignSelf="center" margin="small" label="Log In" href="/login" />
                <Button alignSelf="center" margin="small" label="Sign Up" href="/signup" />
        </Box>
    </>
    )
}
export default HomePage;