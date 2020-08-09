import React from "react";
import ROUTES from "../../constants/clientRoutes";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PublicRoute({ component: Component, ...rest }) {
    const isSignedIn = useSelector((state) => state.user.isSignedIn);
    return (
        <Route
            {...rest}
            render={(props) =>
                isSignedIn ? (
                    <Redirect to={ROUTES.HOME} />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

export default PublicRoute;
