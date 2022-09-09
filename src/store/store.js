import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import historyReducer from './history/historySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    history: historyReducer,
  },
});
