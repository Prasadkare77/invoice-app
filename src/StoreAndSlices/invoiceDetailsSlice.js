import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    invoices: []
}

const invoiceDetailsSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        addInvoice:(state,action) => {
            console.log(action);
            state.invoices.push(action.payload)
        },

        updateInvoice:(state,action) => {
            console.log(action.payload)
            const {ID, updatedInvoice} = action.payload
            const index = state.invoices.findIndex(invoice => invoice.ID === ID)
            if(index !== -1){
                state.invoices[index] = { ...state.invoices[index], ...updatedInvoice}
            }
        },

        deleteInvoice:(state,action) => {
            console.log(action.payload)
            state.invoices = state.invoices.filter(invoice => invoice.ID !== action.payload)
        }
    }
})
export const {addInvoice, updateInvoice, deleteInvoice} = invoiceDetailsSlice.actions
export default invoiceDetailsSlice.reducer;