import React from 'react';
import { Route, Switch} from 'react-router-dom';

// styles 
import './App.css';

// components
import Navbar from './Navbar';
import Home from './Home';
import Profile from './user/Profile';

//Used for Token Authentication
import {useGetToken} from "./getToken.js"
import { getUser, addUser } from '../actions/actions.js'
import {connect} from 'react-redux'
import { useAuth0 } from '../react-auth0-spa.js';

function App(props) {

  const token = useGetToken();
  localStorage.setItem('token', token)
  console.log(localStorage.getItem('token'))

  return (

    <div className="App">

      <Navbar />

      <h1>Resumeker</h1>

      <Switch>
        <Route path ="/register" render = {props => <Profile {...props}/> }/>
        <Route exact path='/' component={Home} />
        <Route path="/profile" render = {props => <Profile {...props}/> }/>
        {/* <Route path="/settings" render = {props => <Profile_Settings {...props}/> }/> */}

      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { addUser, getUser }
) (App);
