/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'url',
  initialState: '',
  reducers: {
    setUrl(state, { payload }) {
      return payload;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
