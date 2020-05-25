import { gql } from "apollo-boost";
//Hobbies
const addHobbyMutation = gql`
    mutation($input: HobbyInput!) {
        addHobby(input: $input){
            draftID
            name
        }
    }
`;
export { addHobbyMutation };
