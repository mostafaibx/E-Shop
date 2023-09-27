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
    resetCart(state) {
      state.cartItems = [];
    },
  },
});

export const { getCartItems, setIsAdded, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
