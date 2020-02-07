import React, { useContext } from 'react';
import "./style.css"

import Player from "../Player"
import Tile from "../Tile"
import Projectile from "../Projectile"
import OtherPlayer from "../OtherPlayer"
// https://opengameart.org/content/wall-0
import wallImage from "./wall.png"
import useKeyboard from "../../hooks/useKeyboard"
import {MAP_BOUNDARY, WALL} from "../../grids/tileTypes"
import { DIMENSIONS } from "../../utils/constants"
import { GameContext } from '../../state/context';

// Takes in the grids size from the parent component App
function Grid() {

    // stores the players position in context
    const { state } = useContext(GameContext)
    // Starts the events that listen for keys being hit and results in the player moving

    useKeyboard()

    // renders the component
    // how to map over an object https://stackoverflow.com/questions/40950546/react-js-right-way-to-iterate-over-object-instead-of-object-entries
    return (
        // adds the player inside the grid
        // maps the tiles into the grid
        <div
            className="grid"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${state.gridTiles.length}, ${DIMENSIONS.TILESIZE}px)`,
                gridTemplateRows: `repeat(${state.gridTiles.length}, ${DIMENSIONS.TILESIZE}px)`
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
                // const backgroundColor = tile.type === "mapBoundary" ? "gray" : "transparent";

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
                })}
            {state.otherPlayers.map((otherPlayer, index) => 
                {   
                    return(<OtherPlayer key={index} otherPlayerState = {otherPlayer}/>)
                })}
            <Player />
        </div>
    )
}
export default Grid;