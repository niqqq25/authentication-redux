import { AUTHENTICATE } from "../constants/actionTypes";
import { getCurrentUser } from "../services/user";

const authenticateStart = () => ({ type: AUTHENTICATE.START });

const authenticateSuccess = (user) => ({
    type: AUTHENTICATE.SUCCESS,
    payload: { user },
});

const authenticateError = () => ({
    type: AUTHENTICATE.ERROR,
});

const authenticate = () => async (dispatch) => {
    dispatch(authenticateStart());

    try {
        const { user } = await getCurrentUser();
        dispatch(authenticateSuccess(user));
    } catch {
        dispatch(authenticateError());
    }
};

export { authenticate };
