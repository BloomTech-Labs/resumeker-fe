import { gql } from "apollo-boost";
//Skills
const addSkillMutation = gql`
    mutation($input: SkillInput!) {
        addSkill(input: $input){
            draftID
            name
            skillType
        }
    }
`;
export { addSkillMutation };
