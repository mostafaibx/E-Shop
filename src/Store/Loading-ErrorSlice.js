import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  err: "",
};

const LoadingErrorSlice = createSlice({
  name: "loadingError",
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.err = action.payload;
    },
  },
});

export const { setIsLoading, setError } = LoadingErrorSlice.actions;

export default LoadingErrorSlice.reducer;
