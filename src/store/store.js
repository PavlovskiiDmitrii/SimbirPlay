import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import historyReducer from './history/historySlice';
import userListSlice from './userList/userListSlice';
import storeSlice from './storeItems/storeItemsSlice';
import rulesSlice from './rules/rulesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    history: historyReducer,
    userList: userListSlice,
    storeItems: storeSlice,
    rules: rulesSlice
  },
});
