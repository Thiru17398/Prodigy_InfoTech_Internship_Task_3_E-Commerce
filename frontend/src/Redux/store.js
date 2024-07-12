import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "./cart/cartSlice";
import filterReducer from "./filters";


export default configureStore({
    reducer:{
        cart:cartReducer,
        filter:filterReducer
    },
});