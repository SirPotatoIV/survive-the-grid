import React, { useContext } from 'react';
import { Box, Button } from 'grommet';
import { START_GAME, END_GAME } from '../../state/actions';
import { GameContext } from '../../state/context';

function GameController(){

    const { state, dispatch } = useContext(GameContext)

    return(<Box 
                direction="row"
                align="center"
                justify="between"
                pad={{left: 'medium', right: 'medium', vertical: 'medium'}}
            >
                <Button label='start game' onClick={()=>
                    dispatch({
                            type: START_GAME,
                            payload: "test"
                        })}>
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