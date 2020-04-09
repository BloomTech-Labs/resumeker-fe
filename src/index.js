import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux & Apollo
import { Provider } from 'react-redux';
import store from './utils/store';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { cache }  from './utils/cache';

import {Auth0Provider} from './react-auth0-spa.js'
import history from "./utils/history.js"
import config from "./auth_config.json"

// styles
import './index.css';

// components
import App from './components/App';

import * as serviceWorker from './serviceWorker';
import { configure } from '@testing-library/react';

// const client = new ApolloClient({
//     link: new HttpLink({
//       uri: 'http://localhost:3000/graphql' //heroku
//     }),
//     connectToDevTools: true,
//     cache,
// })

const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    )
}

// const AppWithProvider = (
// <ApolloProvider client={client}>
//     <Provider store={store}>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </Provider>
// </ApolloProvider>
// )

const AppWithProvider = (
    <Auth0Provider
        domain= {config.domain}
        client_id = {config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </Auth0Provider>
)

ReactDOM.render(AppWithProvider, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
