import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE  } from "./userTypes"
import axios from 'axios'

export const fetchUserRequest = () => {
    console.log("running fetch request")
    return {
        type: FETCH_USERS_REQUEST
    }
}



export const fetchUserSuccess = (data) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data
    }
}

export const fetchUserFailure = (data) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: data
    }
}



// Now we will define a thunk function which will call the above two when appropriate condition meet
// this function receive dispatch method as argument to envoke the above action creators
// this function return a function

export const fetchUsers = () => {

    return (dispatch) => {
        dispatch(fetchUserRequest())

        // axios.get("https://jsonplaceholder.typicode.com/users")
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then( (response) => {
            
            const users = response.data
            dispatch(fetchUserSuccess(users))

        })
        .catch( (error ) => {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))

        })
    }   
}