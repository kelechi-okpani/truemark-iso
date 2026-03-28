import { SUBMIT_QUIZ } from "@/lib/Mutation/mutation";
import { 
    GET_ASSESSMENT, 
    GET_USER_COURSE_SUBMISSION_ASSESSMENT 
} from "@/lib/Query/queries";
import { apiSlice } from "../../api/apiSlice";

export const assessmentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // --- GET ASSESSMENT ---
    getAssessment: builder.query({
      query: (courseId) => ({
        url: '/graphql',
        method: 'POST',
        body: { query: GET_ASSESSMENT, variables: { courseId } },
      }),
      transformResponse: (res: any) => {
        // Guard against GraphQL errors hidden in 200 responses
        if (res?.errors) throw res.errors[0].message;
        return res?.data?.getAssignmentByCourseId;
      },
      transformErrorResponse: (res: any) => 
        res?.data?.errors?.[0]?.message || "Could not load assessment details",
      providesTags: (result, error, courseId) => [
        { type: 'Assessment' as const, id: courseId },
        { type: 'Assessment' as const, id: 'LIST' }
      ],
    }),

    // --- SUBMIT QUIZ ---
    submitQuiz: builder.mutation({
      query: (input) => ({
        url: '/graphql',
        method: 'POST',
        body: { query: SUBMIT_QUIZ, variables: { input } },
      }),
      transformResponse: (res: any) => {
        if (res?.errors) throw res.errors[0].message;
        return {
          data: res?.data?.submitAssignment,
          message: res?.data?.submitAssignment?.message || "Assessment submitted successfully!"
        };
      },
      transformErrorResponse: (res: any) => 
        res?.data?.errors?.[0]?.message || "Submission failed. Please check your connection.",
      invalidatesTags: (result, error, { input }) => [
        { type: 'Assessment', id: input.courseId },
        { type: 'Assessment', id: 'LIST' }
      ],
    }),

    // --- GET USER SUBMISSIONS ---
    getUserSubmissions: builder.query({
      query: (courseId) => ({
        url: '/graphql',
        method: 'POST',
        body: { query: GET_USER_COURSE_SUBMISSION_ASSESSMENT, variables: { courseId } },
      }),
      transformResponse: (res: any) => {
        if (res?.errors) throw res.errors[0].message;
        return res?.data?.getUserSubmissionsForCourse || [];
      },
      transformErrorResponse: (res: any) => 
        res?.data?.errors?.[0]?.message || "Could not retrieve your previous attempts",
      providesTags: (result, error, courseId) => [
        { type: 'Assessment' as const, id: `SUBMISSION-${courseId}` }
      ],
    }),
  }),
  overrideExisting: true, // Standard for Next.js HMR
});

export const { 
  useGetAssessmentQuery, 
  useSubmitQuizMutation, 
  useGetUserSubmissionsQuery 
} = assessmentApi;