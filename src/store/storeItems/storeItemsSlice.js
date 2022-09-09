import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchStoreItem } from '../../api/storeApi';

const initialState = {
  storeItems: [],
  status: 'idle',
};

export const fetchStoreItemsThunk = createAsyncThunk(
  'store/fetchStoreItem',
  async () => {
    const response = await fetchStoreItem();
    return response.data;
  }
);

export const storeItemsSlice = createSlice({
  name: 'storeItem',
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
