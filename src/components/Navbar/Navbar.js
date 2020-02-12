import React from "react"
import {Anchor, Box} from 'grommet';
import {Home} from 'grommet-icons';
import NavBarLinks from "../NavBarLinks"

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
        <Anchor icon={<Home />} label="Survive the Grid" href="/" />
        <NavBarLinks />
    </Box>
    )
}
export default Navbar;