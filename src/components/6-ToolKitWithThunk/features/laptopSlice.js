import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    qty: 10,

}
export const laptopSlice = createSlice({
    name: "laptop",
    initialState,
    reducers: {
        laptopBuy : (state, action) => {
            state.qty+= action.payload
        }
    }

})



export const { laptopBuy } = laptopSlice.actions
export default laptopSlice.reducer