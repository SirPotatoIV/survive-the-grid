import React, {useCallback, useState, useContext} from "react"
import { Button, Form, FormField, Heading, TextInput, Box } from 'grommet';
import {withRouter, Redirect} from "react-router-dom"
import {firebase} from "../../firebase/index"
import { GameContext } from "../../state/context";
// import {Home, Notification} from 'grommet-icons';

// used video for help creating component https://www.youtube.com/watch?v=unr4s3jd9qA

function SignIn({history}){
    
    // const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    
    const handleSignUp = useCallback(async (event)=> {
        try{
            console.log("sign in occurred")
            await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
            history.push("/");
        }
        catch(err){
            console.log(err)
        }
    }, [email, password])
    
    const {currentUser} = useContext(GameContext)
    
    if(currentUser){
        return <Redirect to="/dashboard" />;
    }
    
    return(
        <Box
            margin= "large"
            >
        <Heading margin={{vertical: "medium"}}>Login</Heading>
            <Form>
                <FormField label="E-mail">
                    <TextInput 
                        placeholder="E-mail"
                        type="e-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)} 
                    />
                </FormField>
                <FormField label="Password">
                    <TextInput 
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} 
                    />
                </FormField>
                <Button type="submit" primary label="Login" onClick={()=>handleSignUp()} />
            </Form>
        </Box>
    )
}
export default withRouter(SignIn);