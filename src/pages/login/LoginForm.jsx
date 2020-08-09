import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ROUTES from "../../constants/clientRoutes";

import { InputWithIcon } from "../../components/formElements/Inputs";
import { UserIcon, LockIcon } from "../../assets/icons";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/login";

const LOGIN_ERROR_MESSAGE = "Invalid credentials";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.login);
    const history = useHistory();

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(loginUser({ email, password }))
            .then(() => history.push(ROUTES.HOME))
            .catch(() => {});
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="login-form__header">
                    <h1>Login Form</h1>
                </div>
                <div className="login-form__body">
                    {error && (
                        <div className="alert alert-danger">
                            {LOGIN_ERROR_MESSAGE}
                        </div>
                    )}
                    <InputWithIcon
                        type="email"
                        value={email}
                        placeholder="Username"
                        onChange={handleEmailChange}
                        required
                        Icon={UserIcon}
                    />
                    <InputWithIcon
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        required
                        Icon={LockIcon}
                    />
                    <input
                        className="btn"
                        type="submit"
                        value="Sign In"
                        disabled={isLoading}
                    />
                </div>
            </form>
        </>
    );
}

export default LoginForm;
