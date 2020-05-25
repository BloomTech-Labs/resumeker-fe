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
export { addWorkMutation };
