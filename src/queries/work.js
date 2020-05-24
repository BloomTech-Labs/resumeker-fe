import { gql } from "apollo-boost";
const addWorkMutation = gql`
    mutation(
        $draftID: ID!
        $input: WorkHistoryInput!
    ) {
        addWorkHistory(
            draftID: $draftID
            input: $input
        )
    }
`;
export { addWorkMutation };
