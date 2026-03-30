import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Use your environment variable for the TrueMark API URL
// const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.truemarkglobalss.com/graphql";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://truemark-backend.onrender.com";



export const apiSlice = createApi({
  reducerPath: 'api', // The key in the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // Pull token from localStorage for ISO-compliant session handling
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      
      // Ensure we are sending JSON for GraphQL
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  /**
   * TagTypes are crucial for the "Audit-Ready" flow. 
   * When you 'invalidate' a tag, RTK Query automatically refetches the data.
   */
  tagTypes: [
    'User',             // User profile & Auth info
    'Course',           // Public course catalog
    'EnrolledCourse',   // Courses the user has paid for
    'Module',           // Course sections
    'Lesson',           // Specific lesson content
    'Assessment',       // Quizzes and Scores
    'Transaction'       // Payment history
  ],
  // Endpoints are injected from separate files (authApi.ts, courseApi.ts, etc.)
  endpoints: () => ({}),
});