
// TRUE-MARK USER FLOW
export const CREATE_USERS =  `
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


export const LOGIN_USERS =  `
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


export const FORGOT_USERS_PASSWORD =  `
    mutation ForgetPassword($email: String!) {
        forgetPassword(email: $email) {
            success
            message
        }
    }
`;


export const VERIFY_FORGOT_USERS_PASSWORD =  `
    mutation VerifyForgotPassword($input: VerifyForgotPasswordInput!) {
        verifyForgotPassword(input: $input) {
            success
            message
        }
    }
`;



export const BUY_COURSE =  `
    mutation BuyCourse($courseIds: [ID!]!) {
        buyCourse(courseIds: $courseIds) {
            paymentUrl
            paymentReference
            success
        }
    }
`;



export const CUSTOMER_ENQUIRY =  `
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



export const SUBMIT_QUIZ =  `
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