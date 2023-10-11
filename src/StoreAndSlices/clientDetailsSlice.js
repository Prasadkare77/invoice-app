import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clientDetails: []
}

const clientDetailsSlice = createSlice({
    name: 'clientDetail',
    initialState,
    reducers: {
        addClientDetails:(state,action) => {
            console.log(action);
            state.clientDetails.push(action.payload)
        },
    }
})
export const {addClientDetails} = clientDetailsSlice.actions
export default clientDetailsSlice.reducer;