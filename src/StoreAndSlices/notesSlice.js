import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noteDetails: []
}

const notesSlice = createSlice({
    name: 'notesDetail',
    initialState,
    reducers: {
        addNotesDetails:(state,action) => {
            console.log(action);
            state.noteDetails.push(action.payload)
        },
    }
})
export const {addNotesDetails} = notesSlice.actions
export default notesSlice.reducer;