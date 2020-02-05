export default function reducer(state, action){
    switch(action.type){
        case 'move':
            console.log(`player: x${state.player.position.x}, y${state.player.position.y} / payload: ${action.payload}`)
            return{...state, player: action.payload}
        case 'updateUser':
            return {
                ...state,
                user: action.payload
            }
        default:
            throw new Error("Unknown action:", action.type)
    }
}