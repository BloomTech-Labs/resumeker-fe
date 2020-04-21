import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { getUser } from '../../actions/actions';
import { validate } from 'graphql';

const userInfo = ({user}) => {
        
    if(Object.keys(user).includes('user_metadata')) {
        console.log('Contains metadata')
        return (
            <div>
                <h2>First Name:</h2> <h3>{user.user_metadata.user_info.firstName}</h3>
                <h2>Last Name:</h2> <h3>{user.user_metadata.user_info.lastName}</h3>
                <h2>Email:</h2> <h3>{user.user_metadata.user_info.email}</h3>
            </div>
        )
    } else if(Object.keys(user).includes('given_name', 'family_name')) {
        console.log("Contains user info")
        return(
            <div>
                <h2>First Name:</h2> <h3>{user.given_name}</h3>
                <h2>Last Name:</h2> <h3>{user.family_name}</h3>
                <h2>Email:</h2> <h3>{user.email}</h3>
            </div>
        )
    } else {
        console.log("No Data")
        return(
            <div>
                <h2>First Name:</h2> <h3>Not Set</h3>
                <h2>Last Name:</h2> <h3>Not Set</h3>
                <h2>Email:</h2> <h3>{user.email}</h3>
            </div>
        )
    }


    // <div>
    //     {/* <h2>First Name:</h2> <h3>{props.user.user_metadata.user_info.firstName ? "It exists" : "Missing name"}</h3> */}
    //     {/* <h2>Last Name:</h2> <h3>{validateData(props.user.user.user_metadata.user_info.lastName, props.user.user.family_name)}</h3>
    //     <h2>Email: </h2><h3>{validate(props.user.user.user_metadata.user_info.email, props.user.email)}</h3> */}
    //     {/* <h2>Phone Number: </h2><h3>{localStorage.getItem('phone_number') || 'null'}</h3> */}
    //     <NavLink to='/edit'><button>Edit</button></NavLink>
    // </div>

}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        error: state.userReducer.error,
        loading: state.userReducer.loading
    }
}

export default connect(mapStateToProps, { getUser })(userInfo);
