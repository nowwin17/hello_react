import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart', // name of slice
    initialState:{ //initialize initial state to slice
        items:[]
    },
    reducers:{
        addItem: (state,action) =>{ //mapping of action and reducer function
            state.items.push(action.payload); // push data in items but updating state and it update store
                                               //action contain data 
        },
        removeItem:(state,action) => {
            state.items.pop() 
        },
        clearCart:(state) => { // in this we dont need action.payload
            state.items = []; // dont return anything from it
        }
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; //you will export all reducers(combined all the reducers and export as one reducer)
