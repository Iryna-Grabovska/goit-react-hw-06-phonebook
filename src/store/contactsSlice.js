import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { customAlphabet } from 'nanoid';

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     concacts: [],
//   },
//   reducers: {
//     formSubmithandle(state, action) {
//       console.log(state);
//       console.log(action);
//       state.concacts.push({ data: action.payload.data });
//       console.log(action.payload.data);
//     },
//     deleteContact(state, action) {},
//   },
// });
const nanoid = customAlphabet('0123456789', 8);
const initialState = [];
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // formSubmithandle: (state, action) =>
    //   state.push({
    //     // id: shortid.generate(),
    //     contact: action.payload.contact,
    //   }),
    // formSubmithandle: {
    //   reducer: (state, action) => {
    //     return [...state, action.payload.contact];
    //   },
    //   prepare: contact => ({ payload }),
    //   // { ...contact, id: shortid.generate() }
    // },
    formSubmithandle: {
      reducer: (state, action) => {
        console.log(action);
        return [...state, action.payload.contact];
      },
      prepare: contact => ({
        payload: { ...contact, id: nanoid() },
      }),
    },
    deleteContact: (state, action) =>
      state.filter(i => i.id !== action.payload),
    visibleContacts: (state, action) =>
      state.filter(state =>
        state.value.toLowerCase().includes(action.payload.toLowerCase()),
      ),
  },
});
export const { formSubmithandle, deleteContact, visibleContacts } =
  contactSlice.actions;
export default contactSlice.reducer;
console.log(contactSlice);
