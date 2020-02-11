import React from "react"
import {Anchor, Box, Heading} from 'grommet';
import {Home} from 'grommet-icons';
import NavBarLinks from "../NavBarLInks"

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
        <NavBarLinks />
    </Box>
    )
}
export default Navbar;