import { MOVE_PLAYER, BUILD_WALL, SHOOT_PROJECTILE, UPDATE_PROJECTILES, ROTATE_PLAYER, DAMAGE_WALL, RERENDER, START_GAME, SPECTATE, END_GAME } from "./actions"

export default function reducer(state, action) {
    switch (action.type) {
        case START_GAME:
            const newState = action.payload
            return {
                ...newState,
                isRunning: true
            }
        case SPECTATE:
            const spectatorState = action.payload
            return{...spectatorState}
        case MOVE_PLAYER:
            return { 
                ...state,
                // update player component location 
                players: {
                    ...state.players, 
                    [action.payload.playerName]: {
                        ...state.players[action.payload.playerName],
                        isMoving: true,
                        dx: action.payload.dx,
                        dy: action.payload.dy
                    }
                }
            }
        case ROTATE_PLAYER:
            return { 
                ...state,
                // update player component location 
                players: {
                    ...state.players, 
                    [action.payload.playerName]: {
                        ...state.players[action.payload.playerName],
                        isRotating: true,
                        newOrientation: action.payload.newOrientation
                    }
                }
            }
        case BUILD_WALL:
            // recieved from useKeyboard on "e" key press
            return { 
                ...state,
                // update player component location 
                players: {
                    ...state.players, 
                    [action.payload.playerName]: {
                        ...state.players[action.payload.playerName],
                        isBuilding: true 
                    }
                }
            }
        case SHOOT_PROJECTILE:
            // recieved from useKeyboard on "spacebar" key press
            return { 
                ...state,
                // update player component location 
                players: {
                    ...state.players, 
                    [action.payload.playerName]: {
                        ...state.players[action.payload.playerName],
                        isShooting: true,
                    }
                }
            }
        case UPDATE_PROJECTILES:
            return{...state, projectiles: [...action.payload]}
        case DAMAGE_WALL:
            return { 
                ...state,
                // update tile player moved into and tile they moved out of 
                tileTracker: {
                    ...state.tileTracker,
                    [action.payload.tileName]: action.payload
                }}
        case RERENDER:
            return{...action.payload.newState}
        case END_GAME:
            return {
                ...state,
                isRunning: false
            }
        default:
            throw new Error("Unknown action:", action.type)
    }
}