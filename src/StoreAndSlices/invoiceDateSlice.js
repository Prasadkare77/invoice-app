import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoiceDates: []
}

const invoiceDateSlice = createSlice({
    name: 'invoiceDate',
    initialState,
    reducers: {
        addInvoiceDate:(state,action) => {
            console.log(action);
            state.invoiceDates.push(action.payload)
        },

        updateInvoiceDate:(state,action) => {
            console.log(action.payload)
            const {ID, updatedInvoiceDate} = action.payload
            const index = state.invoiceDates.findIndex(invoiceDate => invoiceDate.ID === ID)
            if(index !== -1){
                state.invoiceDates[index] = { ...state.invoiceDates[index], ...updatedInvoiceDate}
            }
        },
    }
})
export const {addInvoiceDate, updateInvoiceDate} = invoiceDateSlice.actions
export default invoiceDateSlice.reducer;