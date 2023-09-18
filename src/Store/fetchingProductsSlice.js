import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [1, 2],
  categories: [1, 2],
  selectedProduct: [1, 2],
  productsofCategory: [1, 2],
  searchResult: [1, 2],
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
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    productsofCategory(state, action) {
      state.productsofCategory = action.payload;
    },
    searching(state, action) {
      state.searchResult = action.payload;
    },
  },
});

export const {
  allProducts,
  allCategories,
  selectProduct,
  productsofCategory,
  searching,
} = fetchingSlice.actions;

export default fetchingSlice.reducer;
