import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom"
import {GameContext} from "../state/context"


// used video for help creating component https://www.youtube.com/watch?v=unr4s3jd9qA
export default function PrivateRoute({component: RouteComponent, ...rest}){
    const {currentUser} = useContext(GameContext);

    return(
        <Route
            {...rest}
            render={props =>
                currentUser ? (
                    <RouteComponent to={"/dashboard"} />
                    ) : (
                        <Redirect to={"/signin"} />
                    )
            }
        />
    )
}