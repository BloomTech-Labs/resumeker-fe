import { gql } from "apollo-boost";
//Skills
const addSkillMutation = gql`
    mutation($draftID: ID!, $input: SkillType!) {
        addSkill(draftID: $draftID, input: $input)
    }
`;
export { addSkillMutation };