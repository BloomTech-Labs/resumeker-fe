import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { getUser } from '../../actions/actions';

const userInfo = (props) => {
    console.log(props, "<-- Props")
    console.log(props.user, "<-- Props.user")
    console.log(props.user.user, "WHAT?")

    return(
        <div>
            <h2>First Name:</h2> <h3>{props.user.user.user_metadata.user_info.firstName || props.user.given_name || 'null'}</h3>
            <h2>Last Name:</h2> <h3>{props.user.user.user_metadata.user_info.lastName || props.user.family_name || 'null'}</h3>
            <h2>Email: </h2><h3>{props.user.user.user_metadata.user_info.email || props.user.given_name || 'null'}</h3>
            {/* <h2>Phone Number: </h2><h3>{localStorage.getItem('phone_number') || 'null'}</h3> */}
            {/* <NavLink to='/edit'><button>Edit</button></NavLink> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer,
        error: state.userReducer.error,
        loading: state.userReducer.loading
    }
}

export default connect(mapStateToProps, { getUser })(userInfo);
