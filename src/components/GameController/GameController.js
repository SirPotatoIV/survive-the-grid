import React, { useContext } from 'react';
import { Box, Button } from 'grommet';
import { END_GAME } from '../../state/actions';
import { GameContext } from '../../state/context';
import {useFirestore} from "../../firebase/firestore"
import createNewGame from "../../utils/createNewGame.js"

function GameController(){
    const {collectionRef} = useFirestore("game")
    const { state, dispatch } = useContext(GameContext)

    return(<Box 
                direction="row"
                align="center"
                justify="between"
                pad={{left: 'medium', right: 'medium', vertical: 'medium'}}
            >
                <Button label='start game' onClick={()=>
                        {
                            createNewGame(collectionRef, dispatch)
                        }
                    }>
                </Button>
                <Button label="pause game" onClick={()=>{
                    console.log(state.tileTracker)
                    return(
                        dispatch(
                            {
                                type: END_GAME,
                                payload: "test"
                            }
                        ))}}>
                </Button>
            </Box>
    )
}
export default GameController