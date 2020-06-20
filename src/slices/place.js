/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'place',
  initialState: {
    requestState: 'none',
    data: {},
  },
  reducers: {
    placeRequest(state) {
      state.requestState = 'REQUEST';
    },
    placeSuccess(state, { payload }) {
      state.requestState = 'SUCCESS';
      state.data = payload;
    },
    placeFailure(state) {
      state.requestState = 'FAILURE';
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
