import { create } from "zustand";
import { CourseList } from "@/types/blog";

type ExtendedCourse = CourseList & {
  status?: "not-paid" | "paid";
};



type CourseState = {
  // course
  selectedCourse: CourseList | null;
  setSelectedCourse: (course: CourseList) => void;
  clearSelectedCourse: () => void;




  // cart
  cart: ExtendedCourse[];
  wishlist: ExtendedCourse[];
  paidCourses: number[];


  addToCart: (course: ExtendedCourse) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;

  addToWishlist: (course: ExtendedCourse) => void;
  removeFromWishlist: (id: number) => void;

  markAsPaid: (ids: number[]) => void;
};

// 🟢 Load state from localStorage
const loadState = (): Partial<CourseState> => {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem("course-storage");
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    console.error("Error loading state", err);
    return {};
  }
};


// 🟢 Save state to localStorage
const saveState = (state: CourseState) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("course-storage", JSON.stringify(state));
  } catch (err) {
    console.error("Error saving state", err);
  }
};



export const useCourseStore = create<CourseState>((set, get) => ({

  selectedCourse: null,

  cart: [],
  wishlist: [],
  paidCourses: [],


  setSelectedCourse: (course) => {
    set({ selectedCourse: course })
    saveState(get())
  },

  clearSelectedCourse: () => {
    set({ selectedCourse: null });
    saveState(get());
  },


  addToCart: (course) =>
    set((state) => {
      if (state.cart.find((c) => c.id === course.id)) return state;
      const updated = { ...state, cart: [...state.cart, course] };
      saveState(updated);
      return updated;
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updated = { ...state, cart: state.cart.filter((c) => c.id !== id) };
      saveState(updated);
      return updated;
    }),

  clearCart: () =>
    set((state) => {
      const updated = { ...state, cart: [] };
      saveState(updated);
      return updated;
    }),

  addToWishlist: (course) =>
    set((state) => {
      if (state.wishlist.find((c) => c.id === course.id)) return state;
      const updated = { ...state, wishlist: [...state.wishlist, course] };
      saveState(updated);
      return updated;
    }),

  removeFromWishlist: (id) =>
    set((state) => {
      const updated = { ...state, wishlist: state.wishlist.filter((c) => c.id !== id) };
      saveState(updated);
      return updated;
    }),

  markAsPaid: (ids) =>
    set((state) => {
      const updated = { ...state, paidCourses: [...state.paidCourses, ...ids] };
      saveState(updated);
      return updated;
    }),

}));


if (typeof window !== "undefined") {
  const initialState = loadState();
  if (Object.keys(initialState).length > 0) {
    useCourseStore.setState(initialState as CourseState);
  }
}