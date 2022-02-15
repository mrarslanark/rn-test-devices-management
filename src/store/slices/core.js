import {createSlice} from '@reduxjs/toolkit';

const coreSlice = createSlice({
  name: 'core',
  initialState: {
    theme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const {toggleTheme} = coreSlice.actions;
export default coreSlice.reducer;
