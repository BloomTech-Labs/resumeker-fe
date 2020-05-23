import { gql } from "apollo-boost";

const getDraftsQuery = gql`
    query {
        getDrafts {
            id
            userID
            email
            name
        }
    }
`;

const getDraftQuery = gql`
    query($draftID: ID!) {
        getDraft(draftID: $draftID) {
            id
            userID
            email
            name
            #role
            #project
            #work
            #education
            #skill
            #hobbies
        }
    }
`;

const addDraftMutation = gql`
    mutation($input: DraftInput!) {
        addDraft(input: $input)
    }
`;
export { addDraftMutation, getDraftsQuery, getDraftQuery };
