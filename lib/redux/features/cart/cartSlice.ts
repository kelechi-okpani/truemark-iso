import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a strict interface for your courses
export interface Course {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

interface CartState {
  cartItems: Course[];
  wishlistItems: Course[];
}

const initialState: CartState = {
  cartItems: [],
  wishlistItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Course>) => {
      const exists = state.cartItems.find((item) => item.id === action.payload.id);
      if (!exists) state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    addToWishlist: (state, action: PayloadAction<Course>) => {
      const exists = state.wishlistItems.find((item) => item.id === action.payload.id);
      if (!exists) state.wishlistItems.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, addToWishlist, removeFromWishlist, clearCart } = cartSlice.actions;
export default cartSlice.reducer;