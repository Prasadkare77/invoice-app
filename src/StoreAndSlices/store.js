import { configureStore } from '@reduxjs/toolkit';
import invoiceDetailsSlice from './invoiceDetailsSlice'
// import clientDetailsSlice from './clientDetailsSlice';
// import invoiceDateSlice from './invoiceDateSlice';
// import notesSlice from './notesSlice';
// import itemSlice from './itemSlice';

export const store =  configureStore({
    reducer: {
      invoice: invoiceDetailsSlice,
      // clientDetail: clientDetailsSlice,
      // invoiceDate: invoiceDateSlice,
      // notesDetail: notesSlice,
      // item: itemSlice
        
    },
  })

