import React, { useContext } from 'react';
import "./style.css"

import Player from "../Player"
import useKeyboard from "../../hooks/useKeyboard"
import { DIMENSIONS } from "../../utils/constants"
import { useStateValue } from '../../state/context';

// Takes in the grids size from the parent component App
function Grid() {

    // stores the players position in context
    const [state, dispatch] = useStateValue()

    // Starts the events that listen for keys being hit and results in the player moving

    useKeyboard()

    console.log(Object.keys(state.tileTracker).length)
    const gridTiles = Object.keys(state.tileTracker).map((tileRef) => {
        const tile = state.tileTracker[tileRef]
        const backgroundColor = tile.type === "mapBoundary" ? "gray" : "transparent";
        return(<div
                    key={tile.tileName}
                    className="tile"
                    style={{
                        gridColumnStart: `${tile.x}`,
                        gridColumnEnd: `${tile.x+1}`,
                        gridRowStart: `${tile.y}`,
                        gridRowEnd: `${tile.y+1}`,
                        backgroundColor: backgroundColor
                    }}
                >
                    {tile.tileName}
                </div>)
    })
    // renders the component
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
            {state.gridTiles.map((tile) => {
                const columnStart = tile.x;
                const columnEnd = columnStart + 1;
                const rowStart = tile.y
                const rowEnd = rowStart + 1;
                const backgroundColor = tile.type === "mapBoundary" ? "gray" : "transparent";

                return (
                    <div
                        key={tile.tileName}
                        className="tile"
                        style={{
                            gridColumnStart: `${columnStart}`,
                            gridColumnEnd: `${columnEnd}`,
                            gridRowStart: `${rowStart}`,
                            gridRowEnd: `${rowEnd}`,
                            backgroundColor: backgroundColor
                        }}
                    >
                        {tile.tileName}
                    </div>
                )
            })}
            <Player />
        </div>
    )
}
export default Grid;