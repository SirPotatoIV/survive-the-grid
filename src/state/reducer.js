export default function reducer(state, action){
    switch(action.type){
        case 'move':
            console.log(action.payload)
            return{...state, player: action.payload}
        default:
            throw new Error("Unknown action:", action.type)
    }
}