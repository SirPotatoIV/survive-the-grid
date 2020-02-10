import React from "react"
import {Anchor, Box, Button, Heading} from 'grommet';
import {Home, Notification} from 'grommet-icons';
import {Link} from 'react-router-dom'
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
        <Link to='/'><Anchor icon={<Home />} /></Link>
        <Heading level='3' margin='none'>Survive the Grid</Heading>
        <SignedInLinks/>
        <SignedOutLinks/>
    </Box>
    )
}
export default Navbar;