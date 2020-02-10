import React from "react"
import {Anchor, Box } from 'grommet';

function SignedOutLinks(props){
    return(
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{left: 'medium', right: 'small', vertical: 'small'}}
        style={{zIndex:'1'}}
        {...props}
    >
        <Anchor label="Login" href="/signin" />
        <Anchor label="Sign Up" href="/signup" />
    </Box>
    )
}
export default SignedOutLinks;