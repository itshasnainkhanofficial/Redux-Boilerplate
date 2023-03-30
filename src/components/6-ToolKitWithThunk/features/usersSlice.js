import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoading : false,
    users: [],
    error: ""
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=> {
    // return axios.get("https://jsonplaceholder.typicode.com/users")
    return axios.get("https://jsonplaceholder.typicode.com/photos")
    .then( (res) => res.data)
    .catch( (error) => error.message)
})


export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        }),

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false,
            state.error = ""
        }),

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.users = []
            state.isLoading = false,
            // state.error = action.error.messsage
            state.error = action.payload
        })
    }
})

export default userSlice.reducer

