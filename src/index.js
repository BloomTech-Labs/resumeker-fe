import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import App from "./components/App";
import "./index.css";
import store, { history } from "./utils/store";
import { Auth0Provider } from "./react-auth0-spa.js";
const configStore = store();

const onRedirectCallback = (appState) => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};



export const client = new ApolloClient({
    uri: process.env[`REACT_APP_${process.env.REACT_APP_ENV}_API`],
    request: (operation) => {
        const token = localStorage.getItem("token");
        
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : "",
            },
        });
    },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            client_id={process.env.REACT_APP_CLIENT_ID}
            redirect_uri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            <Provider store={configStore}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        </Auth0Provider>
    </ApolloProvider>,
    document.getElementById("root")
);

if (window.Cypress) {
    window.store = configStore;
}
