import React from "react"
import {Anchor, Box } from 'grommet';

function SignedInLinks(props){
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
        <Anchor label="Log Out" href="/" />
        <Anchor label="Play" href="/" />
    </Box>
    )
}
export default SignedInLinks;