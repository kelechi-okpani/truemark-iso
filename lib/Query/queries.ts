// import { gql } from "@apollo/client";


// TRUE-MARK COURSES - MODULES - LESSONS

export const GET_COURSES = `
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

export const GET_COURSES_MODULES = `
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

export const GET_COURSES_LESSONS = `
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
export const GET_USERS = `
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




export const VERIFY_PAYMENT = `
    query Query($reference: String!) {
        verifyPayment(reference: $reference)
    }
`;



// TRUE-MARK ENROLLED - COURSES - MODULES - LESSONS
export const GET_USER_ENROLLED_COURSES = `
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

export const GET_USER_ENROLLED_COURSES_MODULES = `
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

export const GET_USER_ENROLLED_COURSES_MODULES_LESSONS = `
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


// TRUE-MARK ENROLLED - EXAMINATION
export const GET_ASSESSMENT = `
    query GetAssignmentByCourseId($courseId: ID!) {
        getAssignmentByCourseId(courseId: $courseId) {
            id
            courseId
            title
            description
            questions {
                id
                assignmentId
                questionText
                options {
                    id
                    questionId
                    optionText
                }
                correctAnswer
            }
        }
    }
`;

export const GET_USER_COURSE_SUBMISSION = `
    query GetAssignmentByCourseId($courseId: ID!) {
        getAssignmentByCourseId(courseId: $courseId) {
            id
            courseId
            title
            description
            questions {
                id
                assignmentId
                questionText
                options {
                    id
                    questionId
                    optionText
                }
                correctAnswer
            }
        }
    }
`;

export const GET_USER_COURSE_SUBMISSION_ASSESSMENT = `
    query GetUserSubmissionsForCourse($courseId: ID!) {
        getUserSubmissionsForCourse(courseId: $courseId) {
            id
            assignmentId
            userId
            score
            answers {
                id
                submissionId
                questionId
                selectedOptionId
                correctAnswer
            }
            user {
                id
                email
                fullname
                isAdmin
                createdAt
                updatedAt
            }
        }
    }
`;


//TRUE MARK TRANSACTION

export const GET_USER_TRANSACTION = `
    query GetPayments($page: Int, $pageSize: Int) {
        getPayments(page: $page, pageSize: $pageSize) {
            payments {
                id
                amount
                paymentReference
                status
                courseId
                userId
                course {
                    id
                    name
                    description
                    image
                    price
                    createdAt
                    updatedAt
                }
                createdAt
                updatedAt
            }
            total
            page
            pageSize
        }
    }
`
