import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'requestState',
  initialState: 'init',
  reducers: {
    setRequest() {
      return 'REQUEST';
    },
    setSuccess() {
      return 'SUCCESS';
    },
    setFailure() {
      return 'FAILURE';
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
