import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addItems:(state,action) => {
            console.log(action);
            state.items.push(action.payload)
        },
    }
})
export const {addItems} = itemSlice.actions
export default itemSlice.reducer;