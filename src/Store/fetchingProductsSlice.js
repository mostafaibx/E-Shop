import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
};

const fetchingSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    allProducts(state, action) {
      state.products = action.payload;
    },
    allCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { allProducts, allCategories } = fetchingSlice.actions;

export default fetchingSlice.reducer;
