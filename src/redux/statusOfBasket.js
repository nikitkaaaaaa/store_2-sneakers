import { createSlice } from "@reduxjs/toolkit";

export const statusOfBasket = createSlice({
    name : 'statusOfBasket',
    initialState : {
        statusOfBasket : false
    },
    reducers : {
        openbasket : (state) => {
            state.statusOfBasket = true;
        },
        closebasket : (state) => {
            state.statusOfBasket = false
        }
    }
})
export const {openbasket,closebasket} = statusOfBasket;
export default statusOfBasket;