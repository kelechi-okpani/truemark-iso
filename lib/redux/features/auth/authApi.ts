import { CREATE_USERS, FORGOT_USERS_PASSWORD, LOGIN_USERS, VERIFY_FORGOT_USERS_PASSWORD } from "@/lib/Mutation/mutation";
import { GET_USERS } from "@/lib/Query/queries";
import { apiSlice } from "../../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // --- LOGIN ---
    login: builder.mutation({
      query: (input) => ({
        url: '/graphql',
        method: 'POST',
        body: { query: LOGIN_USERS, variables: { input } },
      }),
      transformResponse: (res: any) => {
        if (res?.errors) throw res.errors[0].message; // Force error state
        return res?.data?.login;
      },
      transformErrorResponse: (res: any) => 
        res?.data?.errors?.[0]?.message || res?.message || "Login failed",
      invalidatesTags: ['User'],
    }),

    // --- CREATE ACCOUNT ---
    createAccount: builder.mutation({
      query: (input) => ({
        url: '/graphql',
        method: 'POST',
        body: { query: CREATE_USERS, variables: { input } },
      }),
      transformResponse: (res: any) => {
        if (res?.errors) throw res.errors[0].message;
         
        return {
          data: res?.data?.createAccount,
          message: res?.data?.createAccount?.message || "Registration successful!"
        };
      },
      transformErrorResponse: (res: any) => 
        res?.data?.errors?.[0]?.message || res?.message || "Account creation failed",
    }),

    // --- GET USER INFO ---
    getUserInfo: builder.query({
      query: () => ({
        url: '/graphql',
        method: 'POST',
        body: { query: GET_USERS },
      }),
      transformResponse: (res: any) => {
        if (res?.errors) throw res.errors[0].message;
        return res?.data?.getUserInfo;
      },
      transformErrorResponse: (res: any) => 
        res?.data?.errors?.[0]?.message || "Could not fetch profile",
      providesTags: ['User'],
    }),

    // --- FORGOT PASSWORD ---
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: '/graphql',
        method: 'POST',
        body: { query: FORGOT_USERS_PASSWORD, variables: { email } },
      }),
      transformResponse: (res: any) => {
        if (res?.errors) throw res.errors[0].message;
        return res?.data?.forgetPassword;
      },
      transformErrorResponse: (res: any) => 
        res?.data?.errors?.[0]?.message || "Reset request failed",
    }),

    // --- VERIFY PASSWORD ---
    verifyForgotPassword: builder.mutation({
      query: (input) => ({
        url: '/graphql',
        method: 'POST',
        body: { query: VERIFY_FORGOT_USERS_PASSWORD, variables: { input } },
      }),
      transformResponse: (res: any) => {
        if (res?.errors) throw res.errors[0].message;
        return res?.data?.verifyForgotPassword;
      },
      transformErrorResponse: (res: any) => 
        res?.data?.errors?.[0]?.message || "Verification failed",
    }),
  }),
  overrideExisting: true,
});

export const { 
  useLoginMutation, 
  useCreateAccountMutation, 
  useGetUserInfoQuery,
  useForgotPasswordMutation,
  useVerifyForgotPasswordMutation
} = authApi;