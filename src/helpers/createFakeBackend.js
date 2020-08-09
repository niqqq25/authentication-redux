import { generateToken, verifyToken } from "./jwtToken";
import Database from "./database";
import ROUTES from "../constants/serverRoutes";

const USER_TOKEN_KEY = "user_token";

function createFakeBackend() {
    const realFetch = window.fetch;
    const database = new Database();

    window.fetch = (url, opts) => {
        const { method } = opts;
        const body = opts.body && JSON.parse(opts.body);

        return new Promise((resolve, reject) => {
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith(`${ROUTES.USER.ROOT}${ROUTES.USER.ME}`) &&
                        method === "GET":
                        return getCurrentUser();
                    case url.endsWith(
                        `${ROUTES.USER.ROOT}${ROUTES.USER.LOGIN}`
                    ) && method === "POST":
                        return loginUser();
                    case url.endsWith(
                        `${ROUTES.USER.ROOT}${ROUTES.USER.LOGOUT}`
                    ) && method === "GET":
                        return logoutUser();
                    default:
                        return realFetch(url, opts)
                            .then((res) => resolve(res))
                            .catch((err) => reject(err));
                }
            }

            function getCurrentUser() {
                const userToken = localStorage.getItem(USER_TOKEN_KEY);

                if (!userToken) {
                    return error();
                }

                try {
                    const { email } = verifyToken(userToken);
                    const user = database.find(email);
                    if (user) {
                        delete user.password;
                        ok({ user });
                    } else {
                        throw "";
                    }
                } catch {
                    localStorage.removeItem(USER_TOKEN_KEY);
                    error();
                }
            }

            function loginUser() {
                const { email, password } = body;

                const user = database.find("email", email);
                const isValid = user && user.password === password;

                if (isValid) {
                    const userToken = generateToken({ email, password });
                    localStorage.setItem(USER_TOKEN_KEY, userToken);

                    delete user.password;
                    ok({ user });
                } else {
                    error("Invalid Credentials");
                }
            }

            function logoutUser() {
                localStorage.removeItem(USER_TOKEN_KEY);
                ok();
            }

            function ok(body) {
                resolve({ json: () => body || {} });
            }

            function error(errorMessage) {
                resolve({
                    json: () => ({ status: "error", message: errorMessage }),
                });
            }
        });
    };
}

export default createFakeBackend;
