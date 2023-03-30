import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer.js'
import logger from 'redux-logger'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'reducer',
    storage,
  }
  
//   to add more reducers use combineReducers 
const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({

    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>  { 
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // reason to use these is provided below
            },
        }).concat(logger);
        
    },
})

export default store

// we need to add some extra configuration to the store as well.
//  This configuration is in the form of middleware.
//   Persistence uses a serializable check to make sure the data we store is serializable.
//    However, we do not want this check to be performed on certain actions performed by Redux Persist itself.
// source: https://betterprogramming.pub/implementing-react-redux-store-with-persistence-44a030bbbf94