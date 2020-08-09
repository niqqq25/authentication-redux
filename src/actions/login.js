import { LOGIN } from "../constants/actionTypes";
import { loginUser } from "../services/user";

const loginStart = () => ({ type: LOGIN.START });

const loginSuccess = (user) => ({
    type: LOGIN.SUCCESS,
    payload: { user },
});

const loginError = (error) => ({
    type: LOGIN.ERROR,
    payload: { error },
});

const _loginUser = ({ email, password }) => async (dispatch) => {
    dispatch(loginStart());

    try {
        const { user } = await loginUser({ email, password });
        dispatch(loginSuccess(user));
    } catch ({ message }) {
        dispatch(loginError(message));
        throw message;
    }
};

export { _loginUser as loginUser };
