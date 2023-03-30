import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from './rootReducer.js'

// for persist laptop qty state
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, REHYDRATE } from 'redux-persist'

const persistConfig = {
    key: 'rootReducer',
    storage,
    whitelist: ['laptopReducer']
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>  { 

        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // reason to use these is provided below
            },
        });
        
    },
})

// without persist
// const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
// })

export default store