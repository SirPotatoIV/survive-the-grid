import React from "react"
import {Box, Heading} from 'grommet';
// import {Home, Notification} from 'grommet-icons';
import {Link} from 'react-router-dom'
import Grid from '../Grid'

function Dashboard(props){
    return(
    <Box
        pad={{left: 'medium', right: 'small', vertical: 'small'}}
    >
        <Grid/>
    </Box>
    )
}
export default Dashboard;