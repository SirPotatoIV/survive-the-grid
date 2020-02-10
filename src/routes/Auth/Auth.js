import React, {useContext} from "react"
import { Route, Redirect } from "react-router-dom";
import { Button, Form, FormField, TextInput } from 'grommet';
import { UserContext, AUTHENTICATING } from "../../firebase/";
// import {Home, Notification} from 'grommet-icons';

function Auth(props){
    const user = useContext(UserContext);
    if (user === AUTHENTICATING) {
      return null;
    }
    
    return(

    )
}
export default Auth;