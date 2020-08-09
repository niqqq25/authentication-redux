import React from "react";
import ROUTES from "../../constants/clientRoutes";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
    const isSignedIn = useSelector((state) => state.user.isSignedIn);   
    return (
        <Route
            {...rest}
            render={(props) =>
                isSignedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={ROUTES.LOGIN} />
                )
            }
        />
    );
}

export default PrivateRoute;
