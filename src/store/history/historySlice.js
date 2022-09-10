import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchHistory } from '../../api/historyAPI';

const initialState = {
    user: [],
    status: 'idle',
};

export const fetchUserDataThunk = createAsyncThunk(
    'userData/fetchHistory',
    async (amount) => {
        const response = await fetchHistory(amount);
        return response.result;
    }
);

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDataThunk.pending, (state) => {
                state.user = 'loading';
            })
            .addCase(fetchUserDataThunk.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user += action.payload;
            });
    },
});

export const selectUserData = (state) => state.userData;

export default userDataSlice.reducer;
