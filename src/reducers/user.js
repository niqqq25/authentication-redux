import { AUTHENTICATE, LOGIN, LOGOUT } from "../constants/actionTypes";

const initialState = {
    user: null,
    isSignedIn: false,
};

function user(state = initialState, { type, payload }) {
    switch (type) {
        case AUTHENTICATE.SUCCESS:
        case LOGIN.SUCCESS:
            return {
                user: payload.user,
                isSignedIn: true,
            };
        case LOGOUT.SUCCESS:
            return initialState;
        default:
            return state;
    }
}

export default user;
