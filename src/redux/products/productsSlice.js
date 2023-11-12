import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk, getProductsByCategoryThunk } from "./productsThunk";

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

export const productsSlice = createSlice({
  name: "products",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, handlePending)
      .addCase(getProductsThunk.fulfilled, handleFulfilledGet)
      .addCase(getProductsThunk.rejected, handleRejected)
      .addCase(getProductsByCategoryThunk.pending, handlePending)
      .addCase(getProductsByCategoryThunk.fulfilled, handleFulfilledGet)
      .addCase(getProductsByCategoryThunk.rejected, handleRejected)
  },
});

export default productsSlice.reducer;
