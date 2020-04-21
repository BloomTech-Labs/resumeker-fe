import { gql } from 'apollo-boost';

// User Queries 
const getUserQuery=gql`
    query($id: ID){
        getUser(id: $id){
            id
            firstName
        }
    }
`

const allUsersQuery=gql`
    query{
        allUsers{
            id
            firstName
        }
    }
`


// User Mutations 

const createUserMutation = gql`
    mutation($email:String, 
            $userId:String,
            $userImageURL:String,
            $userName:String,
            $firstName:String,
            $lastName:String
            
        ){
        createUser(
            email:$email,
            userId:$userId,
            userImageURL:$userImageURL,
            userName:$userName,
            firstName:$firstName,
            lastName:$lastName
        )
            {
                id
                email
                userId
                userImageURL
                userName
                firstName
                lastName
            }
}
`

// Resume Queries

// Resume Mutations 

export{
    createUserMutation,
    getUserQuery,
    allUsersQuery
}