import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRules } from '../../api/rulesApi';

const initialState = {
  rules: [],
  status: 'idle',
};

export const fetchRulesThunk = createAsyncThunk(
  'rules/fetchRules',
  async (direction) => {
    const response = await fetchRules(direction);
    return response.result;
  }
);

export const rulesSlice = createSlice({
  name: 'rules',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRulesThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRulesThunk.fulfilled, (state, action) => {
        state.status = 'idle';
        state.rules = action.payload;
      });
  },
});

export const selectRules = (state) => state.rules;

export default rulesSlice.reducer;
