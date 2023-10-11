import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myDetails: []
}

const myDetailsSlice = createSlice({
    name: 'myDetail',
    initialState,
    reducers: {
        addMyDetails:(state,action) => {
            console.log(action);
            state.myDetails.push(action.payload)
        },

        updateMyDetails:(state,action) => {
            console.log(action.payload)
            const {ID, updatedMyDetails} = action.payload
            const index = state.myDetails.findIndex(myDetail => myDetail.ID === ID)
            if(index !== -1){
                state.myDetails[index] = { ...state.myDetails[index], ...updatedMyDetails}
            }
        },
    }
})
export const {addMyDetails, updateMyDetails} = myDetailsSlice.actions
export default myDetailsSlice.reducer;