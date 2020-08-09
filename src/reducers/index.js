import { combineReducers } from "redux";

import user from "./user";
import authenticate from "./authenticate";
import login from "./login";
import logout from "./logout";

const rootReducer = combineReducers({ user, authenticate, login, logout });

export default rootReducer;
