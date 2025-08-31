import { gql } from "graphql-request";


// TRUE-MARK COURSES - MODULES - LESSONS

export const CREATE_COURSE = gql`
    mutation CreateCourse($image: Upload!, $input: CourseInput) {
        createCourse(image: $image, input: $input) {
            course {
                id
                name
                description
                image
                price
                createdAt
                updatedAt
            }
            success
        }
    }
`;

export const CREATE_COURSE_MODULE = gql`
    mutation CreateCourseModule($image: Upload!, $input: CreateModuleInput) {
        createCourseModule(image: $image, input: $input) {
            courseModule {
                id
                name
                description
                image
                courseId
                createdAt
                updatedAt
            }
            success
        }
    }`;

export const CREATE_COURSE_LESSON = gql`
    mutation CreateCourseLession($video: Upload!, $input: CreateLessionInput) {
        createCourseLession(Video: $video, input: $input) {
            lession {
                id
                name
                description
                video
                courseModuleId
                createdAt
                updatedAt
            }
            success
        }
    }
`;


export const UPDATE_COURSE = gql`
    mutation UpdateCourse($input: UpdateCourse, $image: Upload) {
        updateCourse(input: $input, image: $image) {
            course {
                id
                name
                description
                image
                price
                createdAt
                updatedAt
            }
            success
        }
    }`;

export const UPDATE_COURSE_MODULE = gql`
    mutation UpdateCourseModule($input: UpdateModuleInput, $image: Upload) {
        updateCourseModule(input: $input, image: $image) {
            courseModule {
                id
                name
                description
                image
                courseId
                createdAt
                updatedAt
            }
            success
        }
    }
`;

export const UPDATE_COURSE_LESSON = gql`
    mutation UpdateCourseLession($input: UpdateLessionInput, $video: Upload) {
        updateCourseLession(input: $input, Video: $video) {
            lession {
                id
                name
                description
                video
                courseModuleId
                createdAt
                updatedAt
            }
            success
        }
    }`;




export const DELETE_COURSE = gql`
    mutation DeleteCourse($deleteCourseId: ID!) {
        deleteCourse(id: $deleteCourseId)
    }
`;

export const DELETE_COURSE_MODULE = gql`
    mutation DeleteCourseModule($deleteCourseModuleId: ID!) {
        deleteCourseModule(id: $deleteCourseModuleId)
    }
`;

export const DELETE_COURSE_LESSON = gql`
    mutation DeleteCourseLession($deleteCourseLessionId: ID!) {
        deleteCourseLession(id: $deleteCourseLessionId)
    }
`;




// TRUE-MARK USER FLOW

export const CREATE_USERS = gql`
    mutation CreateAccount($input: CreateAccountData) {
        createAccount(input: $input) {
            success
            user {
                id
                email
                isAdmin
                createdAt
                updatedAt
                fullname
            }
        }
    }

`;

export const LOGIN_USERS = gql`
    mutation Login($input: LoginInput) {
        login(input: $input) {
            success
            user {
                id
                email
                isAdmin
                createdAt
                updatedAt
            }
            accessToken
            refreshToken
        }
    }
`;


