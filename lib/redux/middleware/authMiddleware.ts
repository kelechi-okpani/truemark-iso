import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { clearAuth } from '../features/auth/authSlice'; // Use named import


export const unauthenticatedMiddleware: Middleware = ({ dispatch }) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const payload = action.payload as any;

    /**
     * ISO LMS Check: GraphQL errors usually come back in a 'data' array 
     * or sometimes nested in 'payload.data.errors'
     */
    const isUnauthenticated = 
      payload?.status === 401 || 
      payload?.data?.errors?.some(
        (err: any) => err?.extensions?.code === 'UNAUTHENTICATED'
      );

    if (isUnauthenticated) {
      // 1. Clear Redux State
      dispatch(clearAuth());

      // 2. Wipe Persistence
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        
        // 3. Redirect to login (Avoid redirecting if already on signin)
        if (!window.location.pathname.includes("/signin")) {
          window.location.href = "/signin";
        }
      }
    }
  }

  return next(action);
};