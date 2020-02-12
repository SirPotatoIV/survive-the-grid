import React, {useCallback, useState} from "react"
import { Button, Form, FormField, TextInput } from 'grommet';
import {withRouter} from "react-router-dom"
import {firebase} from "../../firebase/index"
// import {Home, Notification} from 'grommet-icons';

// used video for help creating component https://www.youtube.com/watch?v=unr4s3jd9qA

function SignUp({history}){
    
    // const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    
    const handleSignUp = useCallback(async (event)=> {
        try{
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            history.push("/");
        }
        catch(err){
            console.log(err)
        }
    }, [email, password])

    return(
        <Form>
            {/* <FormField label="Username">
                <TextInput 
                    placeholder="Username"
                    value={username}
                    onChange={event => setUsername(event.target.value)} 
                />
            </FormField> */}
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
            <Button type="submit" primary label="Sign Up" onClick={()=>handleSignUp()} />
        </Form>
    )
}
export default withRouter(SignUp);