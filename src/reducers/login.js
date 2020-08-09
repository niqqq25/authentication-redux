import { LOGIN } from "../constants/actionTypes";

const initialState = {
    isLoading: false,
    error: null,
};

function login(state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN.START:
            return {
                isLoading: true,
                errors: null,
            };
        case LOGIN.SUCCESS:
            return {
                isLoading: false,
                errors: null,
            };
        case LOGIN.ERROR:
            return {
                isLoading: false,
                error: payload.error,
            };
        default:
            return state;
    }
}

export default login;
