import { gql } from "apollo-boost";
//Languages
const addLanguageMutation = gql`
    mutation($draftID: ID!, $input: LanguageInput!) {
        addLanguage(draftID: $draftID, input: $input)
    }
`;
export { addLanguageMutation };
