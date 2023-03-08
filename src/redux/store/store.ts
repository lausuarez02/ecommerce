import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
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
  } from 'redux-persist';
  //reducers
import { cartReducer } from "redux/reducers/cartReducer";
import {searchReducer} from "redux/reducers/searchReducer";
import { productReducer } from 'redux/reducers/productReducer';


//Here we can add as much reducers as we want
const rootReducer = combineReducers({ 
  cart:cartReducer,
  search:searchReducer,
  productItem: productReducer
})

//Here is the persist configuration where we are blaclisting search to not persis it storage
const persistConfig = {
  key: 'root',
  blacklist: ['search'],
  storage,
}
type RootState = ReturnType<typeof store.getState>

//Here we are passing the combine reducers with the persist config
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

//The configuration of the store
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
