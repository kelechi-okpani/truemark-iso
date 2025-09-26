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



export const BUY_COURSE = gql`
    mutation BuyCourse($courseId: ID!) {
        buyCourse(courseId: $courseId) {
            paymentUrl
            paymentReference
            success
        }
    }
`;



