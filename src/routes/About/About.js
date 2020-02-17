import React from "react"
import {Box, Heading, Text} from "grommet"

export default function About(){
    return(
        <>
            <Heading
                margin="small"
            >
                About
            </Heading>
            <Box
                margin={{
                    vertical:"medium",
                    horizontal:"small"
                }}
            >
                <Text margin={{vertical:"small"}}>
                    This game started as a final project for a web development bootcamp. My class instructor
                    Challenged me to create a multiplayer real-time game using React and Firestore. My original idea was to create
                    a simple 2D top-down battle royale. 
                </Text>

                <Text weight="bold">Current State: </Text>
                <Text margin={{vertical:"small"}}>
                    Individuals who sign up for the web app can play a game against computer players. They can also
                    send the game id, generated every time a new game is started, to others who can spectate them play live. This is not
                    a stream, this is the site actually live updating. This was created as a stepping stone towards actual multiplayer action.
                </Text>
                
                <Text weight="bold">Future State:</Text>
                <Text margin={{vertical:"small"}}>
                    The first goal is to have actual multiplayer functionality up and running. After that, it's adding all sorts
                    of common online videogame features like user profiles, leaderboards, match finder, etc.
                </Text>
            </Box>
        </>
    )
}