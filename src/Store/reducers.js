import fetchingReducer from "./fetchingProductsSlice";
import LoadingErrorReducer from "./Loading-ErrorSlice";
import authReducer from "./AuthSlice";
import cartReducer from "./CartSlice";
import favReduer from "./Fav/FavSlice";
import notificationsReducer from "./notificationsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducers = combineReducers({
  products: fetchingReducer,
  loadingerror: LoadingErrorReducer,
  auth: authReducer,
  cart: cartReducer,
  fav: favReduer,
  notification: notificationsReducer,
});

export default rootReducers;
