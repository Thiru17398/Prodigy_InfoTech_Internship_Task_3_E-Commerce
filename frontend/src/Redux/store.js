import {configureStore} from '@reduxjs/toolkit';
import cartReducer from "./counter/cartSlice";


export default configureStore({
    reducer:{
        cart:cartReducer,
    },
});