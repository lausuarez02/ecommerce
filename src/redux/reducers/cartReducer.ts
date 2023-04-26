import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state:any, action) => {
            const ItemInCart:any = state.cart.find((item:any) => item.id === action.payload.id);
            if(ItemInCart){
                ItemInCart.quantity++;
            }else{
                 state.cart.push({...action.payload, quantity: 1})
                }
        },
        incrementQuantity: (state, action) => {
            const item:any = state.cart.find((item:any) => item.id === action.payload);
            item.quantity++
        },
        decrementQuantity: (state, action) => {
            const item:any = state.cart.find((item:any) => item.id === action.payload);
            item.quantity--;
        
        },
        removeItem: (state:any, action) => {
            const removeItem = state.cart.filter((item:any) => item.id !== action.payload);
            return{
                ...state,
                cart: removeItem
            }
        },
    } 
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions