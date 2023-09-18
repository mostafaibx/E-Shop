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
  },
});

export const { getFavItems } = favSlice.actions;

export default favSlice.reducer;
