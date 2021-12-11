import { createSlice } from '@reduxjs/toolkit';
const initialState = '';

const filterSlice = createSlice({
  name: 'filterContact',
  initialState,
  reducers: {
    changeFilter: state => state.e.currentTarget.value,
  },
});
export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
