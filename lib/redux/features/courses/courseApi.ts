import { 
    GET_COURSES, 
    GET_COURSES_MODULES, 
    GET_USER_ENROLLED_COURSES, 
    GET_USER_ENROLLED_COURSES_MODULES, 
    GET_USER_ENROLLED_COURSES_MODULES_LESSONS 
} from "@/lib/Query/queries";
import { apiSlice } from "../../api/apiSlice";

export const courseApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // --- PUBLIC / CATALOG ---
        getCourses: builder.query({
            query: () => ({
                url: '/graphql',
                method: 'POST',
                body: { query: GET_COURSES },
            }),
            transformResponse: (res: any) => {
                if (res?.errors) throw res.errors[0].message;
                return res?.data?.getCourses || [];
            },
            transformErrorResponse: (res: any) => 
                res?.data?.errors?.[0]?.message || "Could not load course catalog",
            providesTags: ['Course'],
        }),

        getCourseModules: builder.query({
            query: (courseId) => ({
                url: '/graphql',
                method: 'POST',
                body: { query: GET_COURSES_MODULES, variables: { courseId } },
            }),
            transformResponse: (res: any) => {
                if (res?.errors) throw res.errors[0].message;
                return res?.data?.getCourseModules || [];
            },
            transformErrorResponse: (res: any) => 
                res?.data?.errors?.[0]?.message || "Could not load module information",
            providesTags: (result, error, courseId) => [{ type: 'Module', id: courseId }],
        }),

        // --- ENROLLED USER AREA ---
        getEnrolledCourses: builder.query({
            query: () => ({
                url: '/graphql',
                method: 'POST',
                body: { query: GET_USER_ENROLLED_COURSES },
            }),
            transformResponse: (res: any) => {
                if (res?.errors) throw res.errors[0].message;
                return res?.data?.getUserEnrolledCourses || [];
            },
            transformErrorResponse: (res: any) => 
                res?.data?.errors?.[0]?.message || "Failed to load your enrolled courses",
            providesTags: ['EnrolledCourse'],
        }),

        getEnrolledModules: builder.query({
            query: (courseId: string) => ({
                url: '/graphql',
                method: 'POST',
                body: { query: GET_USER_ENROLLED_COURSES_MODULES, variables: { courseId } },
            }),
            transformResponse: (res: any) => {
                if (res?.errors) throw res.errors[0].message;
                return res?.data?.getEnrolledCourseModules || [];
            },
            transformErrorResponse: (res: any) => 
                res?.data?.errors?.[0]?.message || "Access denied: Please ensure you are enrolled",
        }),

        getEnrolledLessons: builder.query({
            query: (moduleId: string) => ({
                url: '/graphql',
                method: 'POST',
                body: { query: GET_USER_ENROLLED_COURSES_MODULES_LESSONS, variables: { moduleId } },
            }),
            transformResponse: (res: any) => {
                if (res?.errors) throw res.errors[0].message;
                return res?.data?.getEnrolledModuleLessions || [];
            },
            transformErrorResponse: (res: any) => 
                res?.data?.errors?.[0]?.message || "Could not load lesson content",
            providesTags: (result, error, moduleId) => [{ type: 'Lesson', id: moduleId }],
        }),
    }),
    overrideExisting: true,
});

export const { 
    useGetCoursesQuery, 
    useGetCourseModulesQuery, 
    useGetEnrolledCoursesQuery,
    useGetEnrolledModulesQuery,
    useGetEnrolledLessonsQuery 
} = courseApi;