import { gql } from "apollo-boost";

//Education
const addEducationMutation = gql`
    mutation($draftID: ID!, $input: EducationHistoryInput) {
        addEducation(draftID: $draftID, input: $input)
    }
`;

export { addEducationMutation };
