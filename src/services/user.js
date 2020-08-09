import _fetch from "../helpers/fetch";
import ROUTES from "../constants/serverRoutes";

const loginUser = async ({ email, password }) =>
    await _fetch(`${ROUTES.USER.ROOT}${ROUTES.USER.LOGIN}`, {
        method: "POST",
        body: { email, password },
    });

const logoutUser = async () =>
    await _fetch(`${ROUTES.USER.ROOT}${ROUTES.USER.LOGOUT}`);

const getCurrentUser = async () =>
    await _fetch(`${ROUTES.USER.ROOT}${ROUTES.USER.ME}`);

export { loginUser, logoutUser, getCurrentUser };
