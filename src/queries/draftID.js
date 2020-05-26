import { gql } from "apollo-boost";

const DRAFT_ID = gql`
    query GetDraftID {
        draftID @client
    }
`;

export { DRAFT_ID };
