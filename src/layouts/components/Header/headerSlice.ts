import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

interface HeaderSlice {
  valueInputSearch: string;
}

const initialState: HeaderSlice = {
  valueInputSearch: '',
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    inputChange: (state, action: PayloadAction<string>) => {
      state.valueInputSearch = action.payload;
    },
  },
});

export const { inputChange } = headerSlice.actions;

export const selectValueInputSearch = (state: RootState) =>
  state.headerReducer.valueInputSearch;

export default headerSlice.reducer;
