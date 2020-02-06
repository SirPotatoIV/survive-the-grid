import { MOVE_PLAYER, BUILD_WALL, SHOOT_PROJECTILE, UPDATE_PROJECTILES, ROTATE_PLAYER } from "./actions"

export default function reducer(state, action) {
    switch (action.type) {
        case MOVE_PLAYER:
            // recieved from useKeyboard on "w,a,s,d" key press
            console.log(action.payload)
            console.log({ 
                ...state, 
                player: action.payload.player, 
                tileTracker: {
                    ...state.tileTracker,
                    [action.payload.pastTile.tileName]: action.payload.pastTile,
                    [action.payload.futureTile.tileName]: action.payload.futureTile
                }})
            return { ...state, player: action.payload.player}
        case ROTATE_PLAYER:
            return{...state, player: action.payload.player}
        case BUILD_WALL:
            // recieved from useKeyboard on "e" key press
            return { ...state, tileTracker: { ...state.tileTracker, [action.payload.tileName]: action.payload.value } }
        case SHOOT_PROJECTILE:
            // recieved from useKeyboard on "spacebar" key press
            return{...state, projectiles: [...state.projectiles, action.payload.newProjectile]}
        case UPDATE_PROJECTILES:
            // recieved from gameLoop
            return{...state, projectiles: [...action.payload]}
        default:
            throw new Error("Unknown action:", action.type)
    }
}