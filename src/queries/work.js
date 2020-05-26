import { gql } from "apollo-boost";
const addWorkMutation = gql`
    mutation($input: WorkHistoryInput!) {
        addWorkHistory(input: $input){
            draftID
            startDate
            endDate
            title
            description
            company
        }
    }
`;

const getWorkByDraft = gql`
query($draftID: ID!){
    getWorkByDraft(draftID: $draftID ){
        id
        draftID
        startDate
        endDate
        title
        description
        company
    }
}
`
export { addWorkMutation, getWorkByDraft };
