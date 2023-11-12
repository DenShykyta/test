import { configureStore } from "@reduxjs/toolkit";
import { persistedCartSliceReducer } from "./products/cartSlise";
// import totalSliceReducer from "./products/TotalSlice";
import productsReducer from "./products/productsSlice";
import { persistStore } from "redux-persist";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistedCartSliceReducer,
    // total: totalSliceReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);