import { createSlice } from "@reduxjs/toolkit";

export const filters = createSlice({
    name:'filters',
    initialState:{
        filters:{
            price:{
                min:0,
                max:0
            }
        },
    },
    reducers:{
        updateFilter:(state , obj) => {
            state.filters = {...obj.payload}
        },
        clearFilter:(state) => {
            state.filters = {
                price:{
                min:0,
                max:0
            }};
        }
    }
});

export const {updateFilter , clearFilter} = filters.actions;

export default filters.reducer;