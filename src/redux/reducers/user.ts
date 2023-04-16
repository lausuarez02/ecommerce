import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'userData',
    initialState: {
        userProfile: [],
        isAuth: false,
    },
    reducers: {
        userAuth : (state:any, action) => {
            state.isAuth = action.payload
        },
        mainUserData : (state:any, action) => {
            state.userProfile.length = 0
            state.userProfile.push(action.payload)
        }
    }
})


export const userData = dataSlice.reducer;
export const {
    userAuth,
    mainUserData
} = dataSlice.actions