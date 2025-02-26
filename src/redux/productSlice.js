//In Your ProductSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Store products array with individual quantities
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload; // Store products from the API
    },

    incrementQuantity: (state, action) => {
      const product = state.products.find((p) => p._id === action.payload);
      if (product) {
        product.quantity = (product.quantity || 0) + 1; // Increment quantity
      }
    },

    decrementQuantity: (state, action) => {
      const product = state.products.find((p) => p._id === action.payload);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
  },
});

export const { setProducts, incrementQuantity, decrementQuantity } =
  productSlice.actions;
export default productSlice.reducer;
