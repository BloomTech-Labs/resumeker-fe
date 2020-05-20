import { gql } from "apollo-boost";

//Education
const addDraftMutation = gql`
    mutation($email: String!, $email: String!) {
        addEducation(email: $email, email: $email)
    }
`;

export { addDraftMutation };


