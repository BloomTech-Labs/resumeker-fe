import { gql } from "apollo-boost";

// User Queries
const getUserQuery = gql`
    query($id: ID) {
        getUser(id: $id) {
            id
            firstName
        }
    }
`;

const allUsersQuery = gql`
    query {
        allUsers {
            id
            firstName
        }
    }
`;


export { getUserQuery, allUsersQuery };