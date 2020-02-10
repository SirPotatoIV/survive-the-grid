import React from "react"
import {Anchor, Box } from 'grommet';
// import {Home, Notification} from 'grommet-icons';
import {NavLink} from 'react-router-dom'

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
        <NavLink to='/'>Log Out</NavLink>
        
    </Box>
    )
}
export default SignedInLinks;