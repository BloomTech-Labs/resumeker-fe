import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// styles 
import './App.css';

// components
import Navbar from './Navbar';
import Home from './Home';
import Profile from './user/Profile';
import Login from './auth/Login';
import Register from './auth/Register';
import Profile_Settings from './user/Profile_settings';

import {useGetToken} from "./auth/getToken.js"

function App() {

  const token = useGetToken();

  console.log(token);

  return (
    <div className="App">
      <Navbar />
      <h1>Resumeker</h1>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Profile_Settings} />

      </Switch>
    </div>
  );
}

export default withRouter(App);
