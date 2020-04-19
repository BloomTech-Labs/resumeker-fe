import React from 'react'
import Qhub from '../assets/Qhub.png';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import { allUsersQuery, getUserQuery } from '../queries/queries';

function Home(props) {

    console.log(props, "home-props")

    console.log(props.data, 'Get User')
    
    const displayName = () => {

        const { getUser } = props.data;

        if(getUser){
                return(
                    <h1>What&#39;s up {getUser.firstName}</h1>
                )
        }else{
            return(
                <div>Loading...</div>
            )
        }
    }

    return (
        <div>
            {displayName()}
            <img className="logo" src={Qhub} alt='QHub Logo' />
        </div>
    )
}


export default graphql(getUserQuery, {
        options:(props)=>{
            return{
                variables:{
                    id:'4'
                }
            }
        }
})(Home);