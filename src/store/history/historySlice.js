import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchHistory } from '../../api/historyAPI';

const initialState = {
    value: [ { points:5 ,title:'Посадил дерево', time:'2015-09-01'},{ points:10 , title:'Положительный отзыв клиента', time:'2015-09-01'},
        { points:10 ,title:'Выложил статью на хабр', time:'2015-09-01'}],
    status: 'idle',
};

export const fetchData = createAsyncThunk(
    'history/fetchHistory',
    async (amount) => {
        const response = await fetchHistory(amount);
        return response.data;
    }
);

export const counterSlice = createSlice({
    name: 'histore',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            });
    },
});

export const selectHistory = (state) => state.history.value;

export default counterSlice.reducer;
