import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice'; // Essential Import
import authReducer from './features/auth/authSlice';
import courseReducer from './features/courses/courseSlice';
import { unauthenticatedMiddleware } from './middleware/authMiddleware';

export const store = configureStore({
  reducer: {
    // Standard Slices
    auth: authReducer,
    courses: courseReducer,
    // API Slice
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Often needed for GraphQL complex objects
    })
      .concat(apiSlice.middleware)
      .concat(unauthenticatedMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;