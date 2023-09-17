import { configureStore } from "@reduxjs/toolkit";
import fetchingReducer from "./fetchingProductsSlice";
import LoadingErrorReducer from "./Loading-ErrorSlice";
import authReducer from "./AuthSlice";
import cartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    products: fetchingReducer,
    loadingerror: LoadingErrorReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
