import { LOGOUT } from "../constants/actionTypes";

const initialState = {
    isLoading: false,
    error: null,
};

function logout(state = initialState, { type, payload }) {
    switch (type) {
        case LOGOUT.START:
            return {
                ...state,
                isLoading: true,
            };
        case LOGOUT.SUCCESS:
            return {
                isLoading: false,
                error: null,
            };
        case LOGOUT.ERROR:
            return {
                isLoading: false,
                error: payload.error,
            };
        default:
            return state;
    }
}

export default logout;
