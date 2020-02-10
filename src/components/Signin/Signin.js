import React, {useState} from "react"
import { Button, Form, FormField, TextInput } from 'grommet';
// import {Home, Notification} from 'grommet-icons';

function Signin(props){
    
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    
    return(
        <Form>
            <FormField label="E-mail">
                <TextInput 
                    placeholder="E-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)} 
                />
            </FormField>
            <FormField label="Password">
                <TextInput 
                    placeholder="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)} 
                />
            </FormField>
            <Button type="submit" primary label="Sign In" />
        </Form>
    )
}
export default Signin;