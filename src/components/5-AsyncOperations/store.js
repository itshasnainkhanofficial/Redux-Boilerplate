import { configureStore } from "@reduxjs/toolkit";
import reducer from './userReducer.js'
import logger from 'redux-logger'


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store