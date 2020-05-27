import { gql } from "apollo-boost";
//Languages
const addLanguageMutation = gql`
    mutation($input: LanguageInput!) {
        addLanguage(input: $input){
            draftID
            language
        }
    }
`;

const getLanguagesByDraft = gql `
query($draftID: ID!){
    getLanguagesByDraft(draftID: $draftID){
        id
        draftID
        language
    }
}
`


export { addLanguageMutation, getLanguagesByDraft };
