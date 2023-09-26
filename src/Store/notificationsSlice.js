import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: {},
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setnotification(state, action) {
      state.notification = action.payload;
    },
  },
});

export const { setnotification } = notificationSlice.actions;

export default notificationSlice.reducer;
