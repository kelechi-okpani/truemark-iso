import { gql } from "@apollo/client";

// TRUE-MARK USER FLOW
export const CREATE_USERS = gql`
    mutation CreateAccount($input: CreateAccountData!) {
        createAccount(input: $input) {
            success
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


export const LOGIN_USERS = gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            success
            user {
                id
                email
                fullname
                isAdmin
                createdAt
                updatedAt
            }
            accessToken
            refreshToken
        }
    }
`;


export const FORGOT_USERS_PASSWORD = gql`
    mutation ForgetPassword($email: String!) {
        forgetPassword(email: $email) {
            success
            message
        }
    }
`;


export const VERIFY_FORGOT_USERS_PASSWORD = gql`
    mutation VerifyForgotPassword($input: VerifyForgotPasswordInput!) {
        verifyForgotPassword(input: $input) {
            success
            message
        }
    }
`;



export const BUY_COURSE = gql`
    mutation BuyCourse($courseIds: [ID!]!) {
        buyCourse(courseIds: $courseIds) {
            paymentUrl
            paymentReference
            success
        }
    }
`;



export const CUSTOMER_ENQUIRY = gql`
    mutation CreateEnquiry($input: CreateEnquiryInput!) {
        createEnquiry(input: $input) {
            id
            name
            email
            phoneNumber
            subject
            message
            createdAt
            updatedAt
        }
    }
    
`



export const SUBMIT_QUIZ = gql`
    mutation SubmitAssignment($input: SubmitAssignmentInput!) {
        submitAssignment(input: $input) {
            id
            assignmentId
            userId
            score
            answers {
                id
                submissionId
                questionId
                selectedOptionId
            }
        }
    }
`