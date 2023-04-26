import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'productItem',
    initialState: {
        product: []
    },
    reducers: {
    productData: (state:any, action) => {
        state.product.length = 0
        const item:any = state.product.find((item:any) => item.id !== action.payload.product.id )
        state.product.push({...action.payload.product, quantity: 1})
        
    },
    deleteAllData: (state:any) => {
        state.product.length = 0
        }
}
});

export const productReducer = productSlice.reducer;
export const {
    productData,
    deleteAllData
} = productSlice.actions