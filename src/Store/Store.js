import { configureStore } from "@reduxjs/toolkit";
import fetchingReducer from "./fetchingProductsSlice";

export const store = configureStore({
  reducer: {
    products: fetchingReducer,
  },
});
