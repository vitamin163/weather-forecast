/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'geolocation',
  initialState: {
    coordinates: null,
    requestState: 'none',
    error: null,
  },
  reducers: {
    geolocationRequest(state) {
      state.requestState = 'REQUEST';
    },
    geolocationSuccess(state, { payload }) {
      state.requestState = 'SUCCESS';
      state.coordinates = payload;
    },
    geolocationFailure(state, { payload }) {
      state.requestState = 'FAILURE';
      state.error = payload;
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
