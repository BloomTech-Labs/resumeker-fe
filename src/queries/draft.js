import { gql } from "apollo-boost";

const getDraftsQuery = gql`
    query {
        getDrafts {
            id
        }
    }
`;

const getDraftQuery = gql`
    query($id: ID!) {
        getDraft(id: $id) {
            id
            name
            email
            
            education{
                id
                schoolType
                schoolName
                startDate
                endDate
                certName
            }
            work{
                id
                startDate
                endDate
                title
                description
                company
            }
            project{
                id            
                title
                projectUrl
                description
                startDate
                endDate
            }
            skill{
                id
                name
                skillType
            }
            hobbies{
                id
                name
            }
        }
    }
`;

const addDraftMutation = gql`
    mutation($input: DraftInput!) {
        addDraft(input: $input)
    }
`;
export { addDraftMutation, getDraftsQuery, getDraftQuery };
