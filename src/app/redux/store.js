import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = {
  key: '',
  storage,
};

const persistedReducer = persistReducer(persistConfig, '')

export const store = configureStore({
  reducer: {

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
      },
    }),
});

export default store;
