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
export { addLanguageMutation };
