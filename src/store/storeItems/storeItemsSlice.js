import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchStoreItem} from '../../api/storeApi';

const initialState = {
  storeItems: [],
  status: 'idle',
};

export const fetchStoreItemsThunk = createAsyncThunk(
  'storeItems/fetchStoreItem',
  async () => {
    const response = await fetchStoreItem();
    return response;
  }
);


export const storeItemsSlice = createSlice({
  name: 'storeItems',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreItemsThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchStoreItemsThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.storeItems = action.payload;
      });
  },
});

export const selectStoreItems = (state) => state.storeItems;

export default storeItemsSlice.reducer;
