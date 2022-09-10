import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchHistory } from '../../api/historyAPI';

const initialState = {
  user: {},
  status: 'idle',
};

export const fetchHistoryThunk = createAsyncThunk(
  'history/fetchHistory',
  async (id) => {
    const response = await fetchHistory(id);
    return response.data;
  }
);

export const historySlice = createSlice({
  name: 'history',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoryThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHistoryThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = action.payload;
      });
  },
});

export const selectHistoryUser = (state) => state.history;

export default historySlice.reducer;
