import { gql } from "apollo-boost";
//Education
const addEducationMutation = gql`
    mutation($input: EducationHistoryInput) {
        addEducationHistory(input: $input) {
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
