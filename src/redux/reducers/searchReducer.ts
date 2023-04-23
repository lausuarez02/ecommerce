import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'dataSearch',
    initialState: {
        dataSearch: [false],
    },
    reducers: {
       mainSearchData: (state:any, action) => {
        state.dataSearch.length = 0;
        state.dataSearch.push(action.payload)
    },
}
});

export const searchReducer = dataSlice.reducer;
export const {
    mainSearchData,
} = dataSlice.actions