import { gql } from "apollo-boost";
//Education
const addEducationMutation = gql`
    mutation($input: EducationHistoryInput) {
        addEducationHistory(input: $input) {
            id
            draftID
            schoolType
            schoolName
            startDate
            endDate
            certName
            courses
        }
    }
`;
export { addEducationMutation };
