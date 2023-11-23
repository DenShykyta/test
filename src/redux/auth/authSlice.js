import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './authOperations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [logIn.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    // For LogOut operation, since the backend does not support such requests and returns an error.
    [logOut.rejected](state) {
      state.user = {};
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const persistedAuthSliceReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
