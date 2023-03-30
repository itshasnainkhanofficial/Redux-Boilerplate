import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer.js'
import logger from 'redux-logger'
// note for why i use getDefaultMiddleware
// By default, configureStore adds some middleware to the Redux store setup automatically.
// If you want to customize the list of middleware, you can supply an array of middleware functions to configureStore:
// However, when you supply the middleware option, you are responsible for defining all the middleware you want added to the store. configureStore will not add any extra middleware beyond what you listed.
// getDefaultMiddleware is useful if you want to add some custom middleware, but also still want to have the default middleware added as well:
// https://redux-toolkit.js.org/api/getDefaultMiddleware
// const store = configureStore({reducer, logger}) //

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store