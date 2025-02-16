import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        // If the product already exists, increase quantity
        existingProduct.quantity += 1;
      } else {
        // If not, add new product to the cart
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // Remove product from the cart
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: () => initialState, // Clear cart
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
