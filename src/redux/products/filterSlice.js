import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesThunk } from "./filterThunk";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesThunk.pending, handlePending)
      .addCase(getCategoriesThunk.fulfilled, handleFulfilledGet)
      .addCase(getCategoriesThunk.rejected, handleRejected);
  },
});

export default filterSlice.reducer;
