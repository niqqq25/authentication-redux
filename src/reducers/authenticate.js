import { AUTHENTICATE } from "../constants/actionTypes";

const initialState = {
    isAuthenticating: false,
};

function authenticate(state = initialState, { type }) {
    switch (type) {
        case AUTHENTICATE.START:
            return {
                isAuthenticating: true,
            };
        case AUTHENTICATE.SUCCESS:
        case AUTHENTICATE.ERROR:
            return {
                isAuthenticating: false,
            };

        default:
            return state;
    }
}

export default authenticate;
