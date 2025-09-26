import { gql } from "@apollo/client";


// TRUE-MARK COURSES - MODULES - LESSONS

export const GET_COURSES = gql`
    query GetCourses {
        getCourses {
            id
            name
            description
            image
            price
            createdAt
            updatedAt
        }
    }
`;

export const GET_COURSES_MODULES = gql`
    query GetCourseModules($courseId: ID!) {
        getCourseModules(courseId: $courseId) {
            id
            name
            description
            image
            courseId
            createdAt
            updatedAt
        }
    }
`;

export const GET_COURSES_LESSONS = gql`
    query GetCourseLessions($moduleId: ID!) {
        getCourseLessions(moduleId: $moduleId) {
            id
            name
            description
            video
            courseModuleId
            createdAt
            updatedAt
        }
    }
`;




// TRUE-MARK USER FLOW
export const GET_USERS = gql`
    query GetUserInfo {
        getUserInfo {
            id
            email
            fullname
            isAdmin
            createdAt
            updatedAt
        }
    }
`;




export const VERIFY_PAYMENT = gql`
    query Query($reference: String!) {
        verifyPayment(reference: $reference)
    }
`;



// TRUE-MARK ENROLLED - COURSES - MODULES - LESSONS
export const GET_USER_ENROLLED_COURSES = gql`
    query GetUserEnrolledCourses {
        getUserEnrolledCourses {
            id
            name
            description
            image
            price
            createdAt
            updatedAt
        }
    }
`;


export const GET_USER_ENROLLED_COURSES_MODULES = gql`
    query GetEnrolledCourseModules($courseId: ID!) {
        getEnrolledCourseModules(courseId: $courseId) {
            id
            name
            description
            image
            courseId
            createdAt
            updatedAt
        }
    }
`;



export const GET_USER_ENROLLED_COURSES_MODULES_LESSONS = gql`
    query GetEnrolledModuleLessions($moduleId: ID!) {
        getEnrolledModuleLessions(moduleId: $moduleId) {
            id
            name
            description
            video
            courseModuleId
            createdAt
            updatedAt
        }
    }
`;