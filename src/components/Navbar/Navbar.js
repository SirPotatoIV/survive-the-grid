import React from "react"
import {Anchor, Box, Heading} from 'grommet';
import {Home} from 'grommet-icons';
import SignedInLinks from "../SignedInLinks"
import SignedOutLinks from "../SignedOutLinks"

function Navbar(props){
    return(
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{left: 'medium', right: 'small', vertical: 'small'}}
        elevation='medium'
        style={{zIndex:'1'}}
        {...props}
    >
        <Anchor icon={<Home />} label="Home" href="/" />
        <Heading level='3' margin='none'>Survive the Grid</Heading>
        <SignedInLinks/>
        <SignedOutLinks/>
    </Box>
    )
}
export default Navbar;