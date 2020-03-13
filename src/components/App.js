import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// styles 
import './App.css';

// components
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Login from './auth/Login';
import Register from './auth/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Resumeker</h1>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
