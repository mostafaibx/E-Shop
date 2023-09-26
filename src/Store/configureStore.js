// configureStore.js

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
  let store = configureStore({ reducer: persistedReducer });
  let persistor = persistStore(store);
  return { store, persistor };
};
