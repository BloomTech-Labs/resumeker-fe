import { gql } from "apollo-boost";
//Projects
const addProjectMutation = gql`
    mutation($draftID: ID!, $input: ProjectInput!) {
        addProject(draftID: $draftID, input: $input)
    }
`;
export { addProjectMutation };
