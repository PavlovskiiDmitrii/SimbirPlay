import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import userListSlice from './userList/userListSlice';
import storeSlice from './storeItems/storeItemsSlice';
import rulesSlice from './rules/rulesSlice';
import historySlice from './history/historySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userList: userListSlice,
    storeItems: storeSlice,
    rules: rulesSlice,
    history: historySlice, 
  },
});
