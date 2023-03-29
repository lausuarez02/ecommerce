import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'dataSearch',
    initialState: {
        dataSearch: [],
    },
    reducers: {
       mainSearchData: (state:any, action) => {
        console.log(action.payload, "teso1")
        state.dataSearch.length = 0
        state.dataSearch.push(action.payload)
    },
}
});

export const searchReducer = dataSlice.reducer;
export const {
    mainSearchData,
} = dataSlice.actions