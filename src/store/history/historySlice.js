import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchHistory } from '../../api/historyAPI';

const initialState = {
    value: [],
    status: 'idle',
};

export const fetchDataThunk = createAsyncThunk(
    'history/fetchHistory',
    async (amount) => {
        const response = await fetchHistory(amount);
        return response.result;
    }
);

export const counterSlice = createSlice({
    name: 'history',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            });
    },
});

export const selectHistory = (state) => state.value;

export default counterSlice.reducer;
