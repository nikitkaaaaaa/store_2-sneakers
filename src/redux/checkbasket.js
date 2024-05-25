import { createSlice } from "@reduxjs/toolkit";

export const checkbasketSlice = createSlice({
    name: 'checkbasket',
    initialState: {
        checkbasket: false
    },
    reducers: {
        openbasket: (state) => {
            state.checkbasket = true;
        },
        closebasket: (state) => {
            state.checkbasket = false;
        }
    }
});

export const { openbasket, closebasket } = checkbasketSlice.actions;
export default checkbasketSlice.reducer;