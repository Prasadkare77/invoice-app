import { configureStore } from '@reduxjs/toolkit';
import myDetailsSlice from './myDetailsSlice';
import clientDetailsSlice from './clientDetailsSlice';
import invoiceDateSlice from './invoiceDateSlice';
import notesSlice from './notesSlice';
import itemSlice from './itemSlice';

export const store =  configureStore({
    reducer: {
      myDetail: myDetailsSlice,
      clientDetail: clientDetailsSlice,
      invoiceDate: invoiceDateSlice,
      notesDetail: notesSlice,
      item: itemSlice
        
    },
  })

