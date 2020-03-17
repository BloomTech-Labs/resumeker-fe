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

// styles
import './index.css';

// components
import App from './components/App';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:3000/graphql' //heroku
    }),
    connectToDevTools: true,
    cache,
})

const AppWithProvider = (
<ApolloProvider client={client}>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
</ApolloProvider>
)

ReactDOM.render(AppWithProvider, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
