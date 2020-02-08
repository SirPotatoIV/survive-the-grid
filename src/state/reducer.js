import { MOVE_PLAYER, BUILD_WALL, SHOOT_PROJECTILE, UPDATE_PROJECTILES, ROTATE_PLAYER, DAMAGE_WALL } from "./actions"

export default function reducer(state, action) {
    switch (action.type) {
        case MOVE_PLAYER:
            // recieved from useKeyboard on "w,a,s,d" key press
            console.log(action.payload)
            return { 
                ...state,
                // update player component location 
                players: {...state.players, [action.payload.player.name]: action.payload.player}
            }
                // update tile player moved into and tile they moved out of 
        case ROTATE_PLAYER:
            console.log(action.payload)
            return{
                ...state, 
                player: {...state.players, [action.payload.player.name]: action.payload.player}
            }
        case BUILD_WALL:
            // recieved from useKeyboard on "e" key press
            return { ...state, tileTracker: { ...state.tileTracker, [action.payload.tileName]: action.payload.value } }
        case SHOOT_PROJECTILE:
            // recieved from useKeyboard on "spacebar" key press
            return{...state, projectiles: [...state.projectiles, action.payload.newProjectile]}
        case UPDATE_PROJECTILES:
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