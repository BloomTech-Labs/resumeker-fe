import { gql } from "apollo-boost";
//Projects
const addProjectMutation = gql`
    mutation($input: ProjectInput!) {
        addProject(input: $input){
            draftID
            title
            projectUrl
            description
            startDate
            endDate
        }
    }
`;
export { addProjectMutation };
