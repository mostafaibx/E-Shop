import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems(state, action) {
      /*       const cart = [...state.cartItems, action.payload];
      state.cartItems = cart;
      console.log(cart); */
      state.cartItems = action.payload;
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { getCartItems, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
