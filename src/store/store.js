import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import historySlice from './history/historySlice';
import userListSlice from './userList/userListSlice';
import storeSlice from './storeItems/storeItemsSlice';
import rulesSlice from './rules/rulesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    history: historySlice,
    userList: userListSlice,
    storeItems: storeSlice,
    rules: rulesSlice
  },
});
