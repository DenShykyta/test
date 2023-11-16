import { configureStore } from '@reduxjs/toolkit';
import { persistedCartSliceReducer } from './products/cartSlice';
import filterSliceReducer from './products/filterSlice';
import productsReducer from './products/productsSlice';
import { persistedAuthSliceReducer } from './auth/authSlice';
import { persistStore } from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterSliceReducer,
    cart: persistedCartSliceReducer,
    auth: persistedAuthSliceReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
