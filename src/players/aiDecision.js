export default function aiDecision(){
    function selectRandomAction(){
        const actions = ["move"];
        const randomActionSelector = Math.floor(Math.random()*actions.length)
        const randomAction = actions[randomActionSelector]
        return(randomAction)
    }
    console.log(selectRandomAction())
}