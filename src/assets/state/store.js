import { configureStore } from '@reduxjs/toolkit';
import backReducer from '../../bank/backSlice';

const store = configureStore({
  reducer: {
    withDraw: backReducer,
  },
});

export default store;
