import React from "react"
import {Box, Button, Heading} from 'grommet';
import {Notification} from 'grommet-icons';

function AppBar(props){
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
        Welcome!
        <Heading level='3' margin='none'>Survive the Grid</Heading>
        <Button icon={<Notification/>} onClick={()=>{}}/>
    </Box>
    )
}
export default AppBar;