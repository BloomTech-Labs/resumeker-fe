import React, {useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { endpoint } from '../endpoint_config.js'

// styles 
import './App.css';

// components
import Navbar from './Navbar';
import Home from './Home';
import Profile from './user/Profile';
import FormEdit from './FormEdit'

//Used for Token Authentication
import { useGetToken } from "./getToken.js"
import PrivateRoute from "./auth/PrivateRoute"
import { getUser, updateUser } from '../actions/actions.js'

//Statemanagement actions

function App(props) {

  const { getUser, updateUser } = props

  console.log(endpoint)

  const token = useGetToken();
  console.log(token)
  localStorage.setItem('token', token)

  console.log(props.user, "<-- Props.user in App.js");

  useEffect(() => {
    if(token) {
      getUser()
    }
    
  }, [token])

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

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    error: state.userReducer.error,
    loading: state.userReducer.loading
  }
}

export default connect(
  mapStateToProps,
  { getUser, updateUser }
) (App);
