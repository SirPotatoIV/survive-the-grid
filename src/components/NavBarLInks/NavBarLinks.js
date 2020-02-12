import React, {useContext} from "react"
import {Anchor, Box, Button } from 'grommet';
import { GameContext } from "../../state/context";
import {firebase} from "../../firebase/index"

function NavBarLinks(props){
    const {currentUser} = useContext(GameContext)
    if(currentUser){
        return(
            <Box
                tag="header"
                direction="row"
                align="center"
                justify="between"
                pad={{left: 'medium', right: 'small', vertical: 'small'}}
                style={{zIndex:'1'}}
                {...props}
            >
                <Anchor label="Spectate" href="/spectate" />
                <Button margin={{horizontal: "small"}} primary="true" label="Play" href="/dashboard" />
                <Button label="Log Out" onClick={()=>{
                        console.log("Log out clicked")
                        firebase
                            .auth()
                            .signOut()
                            .then(function(){
                                console.log("signed out!")
                            })                      
                        }
                    }
                />
            </Box>
        )
    }
    return(
        <Box
            tag="header"
            direction="row"
            align="center"
            alignContent="between"
            justify="around"
            background="brand"
            pad={{left: 'medium', right: 'small', vertical: 'small'}}
            style={{zIndex:'1'}}
            {...props}
        >
            <Anchor label="Spectate" href="/spectate" />
            <Anchor margin={{horizontal:"small"}} label="Login" href="/login" />
            <Anchor label="Sign Up" href="/signup" />
        </Box>
    )
}
export default NavBarLinks;