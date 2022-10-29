import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from "redux/reducers/cartReducer";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


  const persistConfig = {
    key: 'root',
    storage,
  }
  export type RootState = ReturnType<typeof store.getState>

  const persistedReducer = persistReducer<RootState>(persistConfig, cartReducer)

export const store: any = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  })
})

export const persistor = persistStore(store)
