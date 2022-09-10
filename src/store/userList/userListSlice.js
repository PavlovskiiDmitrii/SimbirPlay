import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchUserRate} from '../../api/userListApi';

const initialState = {
  users: [],
  status: 'idle',
};

export const fetchUserListThunk = createAsyncThunk(
  'userList/fetchUserList',
  async (direction) => {
    const response = await fetchUserRate(direction);
    console.log(response.result);
    return response.result;
  }
);

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserListThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserListThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.users = action.payload;
      })
  },
});

export const selectUserList = (state) => state.userList;

export default userListSlice.reducer;
