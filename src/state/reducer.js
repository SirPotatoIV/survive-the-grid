import { MOVE_PLAYER, BUILD_WALL, SHOOT_PROJECTILE, UPDATE_PROJECTILES, ROTATE_PLAYER, DAMAGE_WALL } from "./actions"

export default function reducer(state, action) {
    switch (action.type) {
        case MOVE_PLAYER:
            // recieved from useKeyboard on "w,a,s,d" key press
            return { 
                ...state,
                // update player component location 
                player: action.payload.player,
                // update tile player moved into and tile they moved out of 
                tileTracker: {
                    ...state.tileTracker,
                    [action.payload.pastTile.tileName]: action.payload.pastTile,
                    [action.payload.futureTile.tileName]: action.payload.futureTile
                }}
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
            // console.log({...state,
            //     projectiles: [...action.payload]
            //     tileTracker: {...state.tileTracker, ...updatedTiles}})
            return{...state, projectiles: [...action.payload]}
        case DAMAGE_WALL:
            console.log("health: ",state.tileTracker[action.payload.tileName].health)
            return { 
                ...state,
                // update tile player moved into and tile they moved out of 
                tileTracker: {
                    ...state.tileTracker,
                    [action.payload.tileName]: action.payload
                }}
        default:
            throw new Error("Unknown action:", action.type)
    }
}