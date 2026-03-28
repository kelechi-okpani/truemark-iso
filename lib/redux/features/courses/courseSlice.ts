import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

// ✅ Define a strict interface for better IDE intellisense
export interface ActiveCourse {
  id: string;
  name: string;
  description?: string;
  image?: string;
  price?: number | string;
  modules?: any[];
  [key: string]: any; 
}

interface CourseState {
  activeCourse: ActiveCourse | null;
  activeModuleId: string | null;
  activeLessonId: string | null;
  searchQuery: string;
  isSidebarOpen: boolean;
  lastAccessed: string | null; // ISO Requirement: Audit trail


}

const initialState: CourseState = {
  activeCourse: null,
  activeModuleId: null,
  activeLessonId: null,
  searchQuery: '',
  isSidebarOpen: true,
  lastAccessed: null,
};

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    // ✅ Renamed to match the component's expectation or vice versa
    // I am using 'setActiveCourse' as per your latest snippet
    setActiveCourse: (state, action: PayloadAction<ActiveCourse | null>) => {
      state.activeCourse = action.payload;
      state.lastAccessed = new Date().toISOString();
    },
    
    // ✅ Alias for 'setSelectedCourse' if your components still use that name
    setSelectedCourse: (state, action: PayloadAction<ActiveCourse | null>) => {
      state.activeCourse = action.payload;
    },
    
    setActiveLesson: (state, action: PayloadAction<{ moduleId: string; lessonId: string }>) => {
      state.activeModuleId = action.payload.moduleId;
      state.activeLessonId = action.payload.lessonId;
    },
    
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    
    // toggleSidebar: (state, action: PayloadAction<boolean | undefined>) => {
    //   state.isSidebarOpen = action.payload !== undefined ? action.payload : !state.isSidebarOpen;
    // },

    toggleSidebar: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload !== undefined) {
        state.isSidebarOpen = action.payload;
      } else {
        state.isSidebarOpen = !state.isSidebarOpen;
      }
    },
    
    clearCourseSelection: (state) => {
      state.activeCourse = null;
      state.activeModuleId = null;
      state.activeLessonId = null;
      state.lastAccessed = null;
    }
  },
});

// --- EXPORTS ---

export const { 
  setActiveCourse, 
  setSelectedCourse, // Added this export to fix your component error
  setActiveLesson, 
  setSearchQuery, 
  clearCourseSelection 
} = courseSlice.actions;

// --- SELECTORS (Coursera Pattern) ---

export const { toggleSidebar } = courseSlice.actions;

export const selectActiveCourse = (state: RootState) => state.courses.activeCourse;
export const selectActiveCourseId = (state: RootState) => state.courses.activeCourse?.id || null;

export const selectCurrentLesson = (state: RootState) => ({
    lessonId: state.courses.activeLessonId,
    moduleId: state.courses.activeModuleId
});

export const selectIsSidebarOpen = (state: RootState) => state.courses.isSidebarOpen;
export const selectSearchQuery = (state: RootState) => state.courses.searchQuery;

export default courseSlice.reducer;