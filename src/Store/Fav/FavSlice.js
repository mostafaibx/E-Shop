import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favItems: [],
};

const favSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getFavItems(state, action) {
      state.favItems = action.payload;
    },
    resetFav(state) {
      state.favItems = [];
    },
  },
});

export const { getFavItems, resetFav } = favSlice.actions;

export default favSlice.reducer;
