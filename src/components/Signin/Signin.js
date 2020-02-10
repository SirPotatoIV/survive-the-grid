import React, {useState} from "react"
import { Button, Form, FormField } from 'grommet';
// import {Home, Notification} from 'grommet-icons';

function Signin(props){
    
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    
    return(
        <Form>
            <FormField 
                placeholder="email"
            value={email}
            onChange={event => setEmail(event.target.value)} 
            />
            <FormField 
                placeholder="password"
                value={password}
                onChange={event => setPassword(event.target.value)} 
            />
            <Button type="submit" primary label="Submit" />
        </Form>
    )
}
export default Signin;