import { createSlice } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = { CartItems: [] };

const addProductsSlice = createSlice({
  name: "addProducts",
  initialState,
  reducers: {
    clickByProduct(state, action) {
      if (state.CartItems.includes(action.payload)) {
        return;
      } else {
        state.CartItems.push(action.payload);
      }
    },
    deleteFromCart(state, action) {
      state.CartItems = state.CartItems.filter(
        (item) => item !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: "addProducts",
  storage,
};

export const persistedAddProductsReducer = persistReducer(
  persistConfig,
  addProductsSlice.reducer
);

export const { clickByProduct, deleteFromCart } = addProductsSlice.actions;
