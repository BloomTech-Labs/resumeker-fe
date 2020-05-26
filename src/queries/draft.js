import { gql } from "apollo-boost";

const getDraftsQuery = gql`
    query {
        getDrafts {
            id
        }
    }
`;

const getDraftQuery = gql`
    query($id: ID!) {
        getDraft(id: $id) {
            id
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
