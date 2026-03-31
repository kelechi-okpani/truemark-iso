import { BUY_COURSE, CUSTOMER_ENQUIRY } from "@/lib/Mutation/mutation";
import { apiSlice } from "../../api/apiSlice";
import { 
    VERIFY_PAYMENT, 
    GET_USER_TRANSACTION, 
} from "@/lib/Query/queries";
// ✅ Import the action from your cart slice
import { clearCart } from "../cart/cartSlice"; 

export const commerceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        
        // --- 1. INITIATE PURCHASE ---
        buyCourse: builder.mutation({
            query: (courseIds) => ({
                url: '/graphql',
                method: 'POST',
                body: { query: BUY_COURSE, variables: { courseIds } },
            }),
            transformResponse: (res: any) => {
                if (res?.errors) throw res.errors[0].message;
                return {
                    data: res?.data?.buyCourse,
                    message: res?.data?.buyCourse?.message || "Order initialized successfully"
                };
            },
            transformErrorResponse: (res: any) => 
                res?.data?.errors?.[0]?.message || "Failed to process course purchase",
        }),

        // --- 2. VERIFY PAYMENT (ISO AUDIT LOGIC) ---
        verifyPayment: builder.query({
            query: (reference) => ({
                url: '/graphql',
                method: 'POST',
                body: { query: VERIFY_PAYMENT, variables: { reference } },
            }),
            // transformResponse: (res: any) => {
            //     if (res?.errors) throw new Error(res.errors[0].message);
            //     return res?.data?.verifyPayment;
            // },
            // transformErrorResponse: (res: any) => 
            //     res?.data?.errors?.[0]?.message || "Payment verification failed. Please contact support.",

            transformResponse: (res: any) => {
                    if (res?.errors) {
                        throw new Error(res.errors[0].message);
                    }
                    return res?.data?.verifyPayment;
                },
            transformErrorResponse: (res: any) => {
                return res?.data?.errors?.[0]?.message || 
                    res?.message || 
                    "Payment verification failed.";
            },
                    
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    
                    // ✅ ISO Compliance check
                    const isSuccessful = data?.status === "success" || data?.success === true;

                    if (isSuccessful) { 
                        // A. Auto-refresh the UI for enrolled courses & history
                        dispatch(
                            apiSlice.util.invalidateTags(['EnrolledCourse', 'Transaction'])
                        );

                        // B. Securely clear the cart only after confirmed success
                        dispatch(clearCart()); 
                    }
                } catch (err: any) {
                    // Audit logging for failed verification attempts
                    console?.error("ISO Audit - Payment Verification Failure:", err);
                }
            }
        }),

        // --- 3. GET TRANSACTIONS ---
        getTransactions: builder.query({
            query: (params) => ({
                url: '/graphql',
                method: 'POST',
                body: { query: GET_USER_TRANSACTION, variables: params },
            }),
            transformResponse: (res: any) => {
                if (res?.errors) throw res.errors[0].message;
                return res?.data?.getPayments || [];
            },
            transformErrorResponse: (res: any) => 
                res?.data?.errors?.[0]?.message || "Could not load transaction history",
            providesTags: ['Transaction'],
        }),

        // --- 4. SUBMIT ENQUIRY ---
        submitEnquiry: builder.mutation({
            query: (input) => ({
                url: '/graphql',
                method: 'POST',
                body: { query: CUSTOMER_ENQUIRY, variables: { input } },
            }),
            transformResponse: (res: any) => {
                if (res?.errors) throw res.errors[0].message;
                return {
                    data: res?.data?.createEnquiry,
                    message: "Your message has been sent to our support team."
                };
            },
            transformErrorResponse: (res: any) => 
                res?.data?.errors?.[0]?.message || "Failed to send enquiry",
        }),
    }),
    overrideExisting: true,
});

export const { 
    useBuyCourseMutation, 
    useVerifyPaymentQuery, 
    useGetTransactionsQuery,
    useSubmitEnquiryMutation 
} = commerceApi;