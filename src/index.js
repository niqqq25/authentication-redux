import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import createFakeBackend from "./helpers/createFakeBackend";
import { authenticate } from "./actions/authenticate";

import { Provider } from "react-redux";
import store from "./store";

import "./styles/main.sass";
import "@babel/polyfill";

createFakeBackend();
store.dispatch(authenticate());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
