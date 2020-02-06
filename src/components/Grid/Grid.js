import React, { useContext } from 'react';
import "./style.css"

import Player from "../Player"
import Tile from "../Tile"
import useKeyboard from "../../hooks/useKeyboard"
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
                if (tile.type === "mapBoundary") {
                    backgroundColor = "gray"
                }
                if (tile.type === "wall") {
                    backgroundColor = "yellow"
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
                        backgroundColor: backgroundColor
                    }}
                >
                    {tile.tileName}
                </Tile>)
            })}
            <Player />
        </div>
    )
}
export default Grid;