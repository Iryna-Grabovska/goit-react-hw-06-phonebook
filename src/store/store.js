import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filterContactReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filterContact: filterContactReducer,
  },
});
