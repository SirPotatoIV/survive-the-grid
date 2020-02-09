import React, { useContext } from 'react';
import "./Grid.css"

import Player from "../Player"
import Tile from "../Tile"
import Projectile from "../Projectile"
import PlayerCard from "../PlayerCard"
// https://opengameart.org/content/wall-0
import wallImage from "./wall.png"
import {MAP_BOUNDARY, WALL} from "../../maps/tileTypes"
import { DIMENSIONS } from "../../utils/constants"
import { GameContext } from '../../state/context';
import { START_GAME, END_GAME } from '../../state/actions';


// Takes in the grids size from the parent component App
function Grid() {

    // stores the players position in context
    const { state, dispatch } = useContext(GameContext)

    // renders the component
    // how to map over an object https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries
    return (
        // adds the player inside the grid
        // maps the tiles into the grid
        <>
        <div
            className="grid"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${state.mapSize}, ${DIMENSIONS.TILESIZE}px)`,
                gridTemplateRows: `repeat(${state.mapSize}, ${DIMENSIONS.TILESIZE}px)`
            }}
        >
            {Object.entries(state.tileTracker).map(([key, tile]) => {
                let backgroundColor = "transparent"
                let backgroundImage = "null"
                if (tile.type === MAP_BOUNDARY) {
                    backgroundColor = "gray"
                }
                if (tile.type === WALL) {
                    backgroundColor = "black"
                    backgroundImage = wallImage
                }

                return (<Tile
                    key={tile.tileName}
                    tileName={tile.tileName}
                    style={{
                        gridColumnStart: `${tile.x}`,
                        gridColumnEnd: `${tile.x + 1}`,
                        gridRowStart: `${tile.y}`,
                        gridRowEnd: `${tile.y + 1}`,
                        backgroundColor: backgroundColor,
                        backgroundImage: `url(${backgroundImage})`
                    }}
                >
                    {tile.tileName}
                </Tile>)
            })}
            
            {state.projectiles.map((projectile, index) =>
                {
                    return(<Projectile key={index} projectileState = {projectile}/>)
                })
            }

            {Object.entries(state.players).map(([key, player]) => {
                    if(player.isAlive){
                            return (<Player
                                key={player.name}
                                playerName={player.name}
                            />)
                    }
                })
            }
        </div>
        <button onClick={()=>
             dispatch({
                    type: START_GAME,
                    payload: "test"
                })}>
                    start game
        </button>
        <button onClick={()=>{
             console.log(state.tileTracker)
             return(
                 dispatch(
                     {
                        type: END_GAME,
                        payload: "test"
                    }
                ))}}>
                    pause game
        </button>
        <h1>Alive Players</h1>
        <div className="PlayerCardContainer">
            {Object.entries(state.players).map(([key, player]) => { 
                    return (<PlayerCard
                        key={player.name}
                        player={player}
                    />)
                })}
        </div>
        <h1>Out Players</h1>
        <div className="PlayerCardContainer">
            {Object.entries(state.outPlayers).map(([key, player]) => { 
                    return (<PlayerCard
                        key={player.name}
                        player={player}
                    />)
                })}
        </div>
        </>
    )
}
export default Grid;