import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const GETUSER_QUERY  = gql`
    query {
        getUser {
            userInfo
        }
    }
` 

const UserData = () => {

    const test = useQuery({query: GETUSER_QUERY });

    console.log(test, "testing =======================")

    return(
        <div>
            Hello World
        </div>
    )

}

export default UserData