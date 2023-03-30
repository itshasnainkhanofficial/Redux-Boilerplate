import { combineReducers } from "redux";
import laptopReducer from "./features/laptopSlice";
import  userReducer from "./features/usersSlice";



export const rootReducer = combineReducers({laptopReducer, userReducer})