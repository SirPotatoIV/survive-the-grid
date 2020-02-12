import React, {useContext, useState} from "react"
import {Box, Button, TextInput, Heading} from 'grommet';
import { GameContext } from '../../state/context.js'
import Grid from '../../components/Grid'
import PlayerCard from "../../components/PlayerCard"
import {useFirestore} from "../../firebase/firestore"
import {Edit} from 'grommet-icons';
import { SPECTATE } from "../../state/actions.js";

function Spectator(props){
    const {collectionRef} = useFirestore("game")

    const { state, dispatch } = useContext(GameContext)
    const [gameId, setGameId] = useState("")
    function cb(arg){
        console.log(arg.data())
        dispatch({
            type: SPECTATE,
            payload: arg.data()
        })
    }

    return(
    <>
        <Box>
            <Heading
                alignSelf="center"
                textAlign="center"    
                background="accent-1"
                >
                    Spectate Mode
            </Heading>
        </Box>
        <Box
            pad={{left: 'medium', right: 'small', vertical: 'small'}}
            direction="row"
            justify="center"
        >
            <Box>
                <Heading size="small">Alive Players</Heading>
                <Box className="PlayerCardContainer" direction="column">
                    {Object.entries(state.players).map(([key, player]) => { 
                            return (<PlayerCard
                                key={player.name}
                                player={player}
                            />)
                        })}
                </Box>
            </Box>
            
            <Grid/>

            <Box>
                <Heading size="small">Out Players</Heading>
                <Box className="PlayerCardContainer" direction="column">
                    {Object.entries(state.outPlayers).map(([key, player]) => { 
                            return (<PlayerCard
                                key={player.name}
                                player={player}
                            />)
                        })}
                </Box>
            </Box>
            
        </Box>
        <Box margin="small">
        <TextInput
            margin="small"
            onChange={event => setGameId(event.target.value)}
            placeholder="Enter Game Id"
            value={gameId}
        />
        <Button
            margin="small"
            icon={<Edit />}
            label="See Game"
            onClick={() => {
                async function getGame(){
                    try{
                        console.log(gameId)
                        const docRef = await collectionRef.doc(
                            gameId
                            );
                        const docSnapShot = await docRef.onSnapshot({next: cb})
                        // const docSnapShot = await docRef.get()
                        // const data = await docSnapShot.data() 
                        console.log(docRef, docSnapShot)
                    }
                    catch(err){
                        console.log(err)
                    }
                }
                getGame()
            }}
        />
        </Box>
    </>
    )
}
export default Spectator;