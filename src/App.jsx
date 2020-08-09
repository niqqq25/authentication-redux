import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components/routes";
import ROUTES from "./constants/clientRoutes";
import { Login, Home } from "./pages";

import { useSelector } from "react-redux";

function App() {
    const isAuthenticating = useSelector(
        (state) => state.authenticate.isAuthenticating
    );
    if (isAuthenticating) {
        return null;
    }

    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path={ROUTES.LOGIN} component={Login} />
                <PrivateRoute exact path={ROUTES.HOME} component={Home} />
                <Redirect to={ROUTES.HOME} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
