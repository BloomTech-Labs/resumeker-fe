import { gql } from 'apollo-boost';

// User Queries 

// User Mutations 

const addUserMutation = gql`
    mutation($email:String, 
            $userId:String,
            $userImageURL:String,
            $userName:String,
            $firstName:String,
            $lastName:String
            
        ){
        addUser(
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
    addUserMutation
}