import { createSlice } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = { CartItems: [] };

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
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
  key: "cart",
  storage,
};

export const persistedCartSliceReducer = persistReducer(
  persistConfig,
  CartSlice.reducer
);

export const { addToCart, deleteFromCart } = CartSlice.actions;
