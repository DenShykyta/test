import { createSlice } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = { CartItems: [] };

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const check = state.CartItems.find(item => item.id === action.payload.id);
      if (check) {
        return;
      }
      state.CartItems.push(action.payload);
    },
    deleteFromCart(state, action) {
      state.CartItems = state.CartItems.filter(
        item => item.id !== action.payload
      );
    },
    cleanCart(state) {
      state.CartItems = [];
    },
    changeCount(state, action) {
      state.CartItems = action.payload;
    },
  },
});

const persistConfig = {
  key: 'cart',
  storage,
};

export const persistedCartSliceReducer = persistReducer(
  persistConfig,
  CartSlice.reducer
);

export const { addToCart, deleteFromCart, cleanCart, changeCount } =
  CartSlice.actions;
