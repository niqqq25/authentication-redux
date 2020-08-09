import { LOGOUT } from "../constants/actionTypes";
import { logoutUser } from "../services/user";

const logoutStart = () => ({ type: LOGOUT.START });

const logoutSuccess = () => ({
    type: LOGOUT.SUCCESS,
});

const logoutError = (error) => ({
    type: LOGOUT.ERROR,
    payload: { error },
});

const _logoutUser = () => async (dispatch) => {
    dispatch(logoutStart());

    try {
        await logoutUser();
        dispatch(logoutSuccess());
    } catch (err) {
        const error = err?.message && err;
        dispatch(logoutError(error));
        throw error;
    }
};

export { _logoutUser as logoutUser };
