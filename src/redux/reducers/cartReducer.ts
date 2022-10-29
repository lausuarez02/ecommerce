import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state:any, action) => {
            console.log(action.payload.product)
            const ItemInCart:any = state.cart.find((item:any) => item.id === action.payload.product.id);
            if(ItemInCart){
                ItemInCart.quantity++;
            }else{
                state.cart.push({...action.payload.product, quantity: 1});
            }
        },
        incrementQuantity: (state, action) => {
            const item:any = state.cart.find((item:any) => item.id === action.payload);
            item.quantity++
        },
        decrementQuantity: (state, action) => {
            const item:any = state.cart.find((item:any) => item.id === action.payload);
            if(item.quantity === 1){
                item.quantity = 1
            }else{
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item:any) => item.id !== action.payload);
            state.cart = removeItem
        }
    } 
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem
} = cartSlice.actions