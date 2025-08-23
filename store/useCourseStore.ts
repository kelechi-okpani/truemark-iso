import { create } from "zustand";
import { CourseList } from "@/types/blog";

type ExtendedCourse = CourseList & {
  status?: "not-paid" | "paid";
};

type CourseState = {
  cart: ExtendedCourse[];
  wishlist: ExtendedCourse[];
  paidCourses: number[];

  addToCart: (course: ExtendedCourse) => void;
  removeFromCart: (_id: number) => void;
  clearCart: () => void;

  addToWishlist: (course: ExtendedCourse) => void;
  removeFromWishlist: (_id: number) => void;

  markAsPaid: (_ids: number[]) => void;
};

export const useCourseStore = create<CourseState>((set) => ({
  cart: [],
  wishlist: [],
  paidCourses: [],

  addToCart: (course) =>
    set((state) => {
      // prevent duplicates
      if (state.cart.find((c) => c._id === course._id)) return state;
      return { cart: [...state.cart, course] };
    }),

  removeFromCart: (_id) =>
    set((state) => ({
      cart: state.cart.filter((c) => c._id !== _id),
    })),

  clearCart: () => set({ cart: [] }),

  addToWishlist: (course) =>
    set((state) => {
      if (state.wishlist.find((c) => c._id === course._id)) return state;
      return { wishlist: [...state.wishlist, course] };
    }),

  removeFromWishlist: (_id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((c) => c._id !== _id),
    })),

  markAsPaid: (_id) =>
    set((state) => ({
      paidCourses: [...state.paidCourses, ..._id],
    })),
}));
