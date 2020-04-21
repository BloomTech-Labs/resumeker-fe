import React from 'react';
import { Route, Switch} from 'react-router-dom';
import axios from 'axios'
import {endpoint} from '../endpoint_config.js'

// styles 
import './App.css';

// components
import Navbar from './Navbar';
import Home from './Home';
import Profile from './user/Profile';
import FormEdit from './FormEdit'

//Used for Token Authentication
import {useGetToken} from "./getToken.js"
import PrivateRoute from "./auth/PrivateRoute"

//Statemanagement actions

export default function App() {

  console.log(endpoint)

  const token = useGetToken();
  console.log(token)
  localStorage.setItem('token', token)

  let user = {};

  if(token) {
    axios.get(`${endpoint}/api/getUser`, {headers: {authorization: `Bearer ${token}`}})
        .then(res => {
            user=res.data;
            console.log(user)
            localStorage.setItem('first_name', res.data.user_metadata.first_name || null)
            localStorage.setItem('last_name', res.data.user_metadata.last_name || null)
            localStorage.setItem('email', res.data.user_metadata.email || null)
            localStorage.setItem('phone_number', res.data.user_metadata.phone_number || null)
        })
        .catch(err => {
            console.log(err);
        })
  } else {
    localStorage.clear()
  }

  return (
    <div className="App">
      <Navbar />
      <h1>Resumeker</h1>
      <Switch>
        <Route path ="/register" render = {props => <Profile/> }/>
        <Route exact path='/' component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/edit" component ={FormEdit}/>
      </Switch>
    </div>
  );
}
