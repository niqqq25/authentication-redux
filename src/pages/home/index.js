import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import ROUTES from "../../constants/clientRoutes";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/logout";

function Home() {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => alert(`Welcome back, ${user.fullName}`), 1);
    }, []);

    function handleLogout() {
        dispatch(logoutUser())
            .then(() => history.push(ROUTES.LOGIN))
            .catch(() => {});
    }

    return (
        <>
            <button onClick={handleLogout}>Sign out</button>
        </>
    );
}

export default Home;
