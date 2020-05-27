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
        }
    }
`;

const getEducationByDraft = gql`
query($draftID: ID!){
    getEducationByDraft(draftID: $draftID ){
        id
        draftID
        schoolType
        schoolName
        startDate
        endDate
        certName
    }
}
`

const updateEducationHistory = gql`
    mutation($id: ID!, $input: EducationHistoryInput){
        updateEducationHistory(id: $id, input: $input){
            id
            draftID
            schoolType
            schoolName
            startDate
            endDate
            certName
        }
    }
`





export { addEducationMutation, getEducationByDraft, updateEducationHistory };
