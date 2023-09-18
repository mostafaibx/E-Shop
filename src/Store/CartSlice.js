import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isAdded: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems(state, action) {
      state.cartItems = action.payload;
    },
    setIsAdded(state, action) {
      state.isAdded = action.payload;
    },
  },
});

export const { getCartItems, setIsAdded } = cartSlice.actions;

export default cartSlice.reducer;
