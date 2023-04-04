import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'userData',
    initialState: {
        isAuth: null,
    },
    reducers: {
        mainUserData : (state:any, action) => {
            state.isAuth.length = 0;
            state.isAuth.push(action.payload)
        }
    }
})


export const userData = dataSlice.reducer;
export const {
    mainUserData
} = dataSlice.actions