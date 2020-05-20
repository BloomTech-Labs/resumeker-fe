import { gql } from "apollo-boost";

// User Queries
const getUserQuery = gql`
    query($id: ID) {
        getUser(id: $id) {
            id
            firstName
        }
    }
`;

const allUsersQuery = gql`
    query {
        allUsers {
            id
            firstName
        }
    }
`;

//Education
const addEducationMutation = gql`
    mutation(
        $userId: ID!
        $schoolType: SchoolType
        $schoolName: String
        $startDate: String
        $endDate: String
        $certName: String
    ) {
        addEducation(
            userId: $userId
            schoolType: $schoolType
            schoolName: $schoolName
            startDate: $startDate
            endDate: $endDate
            certName: $certName
        )
    }
`;

const updateEducationMutation = gql`
    mutation(
        $userId: String
        $schoolType: Enum
        $schoolName: String
        $startDate: String
        $endDate: String
        $certName: String
        $courses: String
    ) {
        updateEducation(
            userId: $userId
            schoolType: $schoolType
            schoolName: $schoolName
            startDate: $startDate
            endDate: $endDate
            certName: $certName
            courses: $courses
        ) {
            userId
            schoolType
            schoolName
            startDate
            endDate
            certName
            courses
        }
    }
`;

//Education
const addWorkMutation = gql`
    mutation(
        $userId: ID!
        $startDate: String!
        $endDate: String!
        $title: String!
        $description: String!
        $company: String!
    ) {
        createWorkHistory(
            userId: $userId
            startDate: $startDate
            endDate: $endDate
            title: $title
            description: $description
            company: $company
        )
    }
`;

//Projects
const addProjectMutation = gql`
    mutation(
        $userId: String!
        $title: String!
        $role: ID!
        $projectUrl: String!
        $description: String!
        $startDate: String!
        $endDate: String!
    ) {
        createProject(
            userId: $userId
            title: $title
            role: $role
            projectUrl: $projectUrl
            description: $description
            startDate: $startDate
            endDate: $endDate
        )
    }
`;

//Skills
const addSkillMutation = gql`
    mutation($userId: ID!, $skillType: SkillType!, $name: String!) {
        createSkill(userId: $userId, skillType: $skillType, name: $name)
    }
`;

//Languages
const addLanguageMutation = gql`
    mutation($userId: String!, $language: String!) {
        createLanguage(userId: $userId, language: $language)
    }
`;

//Hobbies
const addHobbyMutation = gql`
    mutation($userId: String!, $name: String!) {
        createHobby(userId: $userId, name: $name)
    }
`;

// Resume Queries

// Resume Mutations

export {
    addWorkMutation,
    addEducationMutation,
    addProjectMutation,
    addSkillMutation,
    addLanguageMutation,
    addHobbyMutation,
};
