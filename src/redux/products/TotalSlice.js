import { createSlice } from "@reduxjs/toolkit";

export const totalSlice = createSlice({
  name: "total",
  initialState: { items: [] },
  reducers: {
    totalPrice(state, action) {
      console.log(state, action);
    },
  },
});

export const { totalPrice } = totalSlice.actions;
export default totalSlice.reducer;
