import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{
        addProduct : (state , product) => {
            var temp = [...state.cartItems];
            var prod = temp.find(prod => prod.id === product.payload.id);
            if(prod === undefined)
                temp.push({...product.payload , quantity : 1 , totalAmount : product.payload.price});
            else{
                prod.quantity++;
                prod.totalAmount+=prod.price;
            }
            state.cartItems = temp;
        },
        incrementQuantity:(state , product) =>{
            const id = product.payload;
            var temp = [...state.cartItems];
            var currProduct = temp.find( prod => prod.id == id);
            currProduct.quantity+=1;
            currProduct.totalAmount+=currProduct.price;
            state.cartItems = temp;

        },
        decrementQuantity:(state , product) => {
            const id = product.payload;
            var temp = [...state.cartItems];
            var currProduct = temp.find( prod => prod.id == id);
            if(currProduct.quantity > 1){
                currProduct.quantity-=1;
                currProduct.totalAmount-=currProduct.price;
            }               
            state.cartItems = temp;
        },
        clearCart:(state) => {
            state.cartItems = [];
        },
        removeProduct: (state , obj ) => {
            var temp = state.cartItems.filter( product => product.id != obj.payload);
            state.cartItems = temp;

        }
    },
});


export const { addProduct , removeProduct , incrementQuantity , decrementQuantity , clearCart} = cartSlice.actions;
export default cartSlice.reducer;