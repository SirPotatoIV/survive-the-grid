import {MOVE_PLAYER, BUILD_WALL} from "./actions"

export default function reducer(state, action){
    switch(action.type){
        case MOVE_PLAYER:
            // recieved from useKeyboard
            return{...state, player: action.payload}
        case BUILD_WALL:
            console.log(action.payload.tileName)
            return{...state, tileTracker: {...state.tileTracker,[action.payload.tileName]: action.playload}}
            // break
        default:
            throw new Error("Unknown action:", action.type)
    }
}