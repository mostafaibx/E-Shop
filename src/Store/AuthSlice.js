import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  currentUser: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setIsLogin, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
