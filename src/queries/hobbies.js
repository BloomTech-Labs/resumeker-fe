import { gql } from "apollo-boost";
//Hobbies
const addHobbyMutation = gql`
    mutation($draftID: ID!, $iput: HobbyInput!) {
        addHobby(draftID: $draftID, input: $input)
    }
`;
export { addHobbyMutation };
