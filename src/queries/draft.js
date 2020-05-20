import { gql } from "apollo-boost";

//Education
const addDraftMutation = gql`
    mutation($name: String!, $email: String!) {
        addDraft(name: $name, email: $email)
    }
`;

export { addDraftMutation };


