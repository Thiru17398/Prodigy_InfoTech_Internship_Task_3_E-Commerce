import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addProduct : (state , product) => {
            var temp = [...state.cartItems];
            temp.push(product.payload);
            state.cartItems = temp;
        },
        removeProduct: (state , obj ) => {
            var temp = state.cartItems.filter( product => product.id != obj.payload);
            console.log(temp);
            state.cartItems = temp;

        }
    },
});


export const { addProduct , removeProduct } = cartSlice.actions;
export default cartSlice.reducer;