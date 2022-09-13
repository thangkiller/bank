import { createSlice } from '@reduxjs/toolkit';

export const backSlice = createSlice({
  name: 'withDraw',
  initialState: {
    value: 25000000,
  },
  reducers: {
    withDraw1: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { withDraw1 } = backSlice.actions;
export default backSlice.reducer;
