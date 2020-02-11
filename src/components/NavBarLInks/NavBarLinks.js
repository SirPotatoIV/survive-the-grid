import React, {useContext} from "react"
import {Anchor, Box } from 'grommet';
import { GameContext } from "../../state/context";

function NavBarLInks(props){
    const {currentUser} = useContext(GameContext)
    if(currentUser){
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
export default NavBarLInks;