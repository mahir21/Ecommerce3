import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"; // Use the productSlice instead

const store = configureStore({
  reducer: {
    product: productReducer, //Use the product Reducer
  },
});

export default store;
