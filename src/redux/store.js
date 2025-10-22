import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSliceReducer from './user/userSlice';
import langSliceReducer from './language/languageSlice';

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const langPersistConfig = {
  key: 'lang',
  storage,
  whitelist: ['lang'],
};

const persistedReducer = persistReducer(authPersistConfig, authSliceReducer);

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    lang: persistReducer(langPersistConfig, langSliceReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
