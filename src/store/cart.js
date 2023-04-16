import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    items: [],
    totalAmount: 0,
    totalNumberOfItems: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        add_item(state, action) {
            const checkIfItemExist = state.items.findIndex(
                (item) => item.id === action.payload.item.id
            );
            const check = state.items[checkIfItemExist];
            if (check) {
                check.quantity = check.quantity + 1
            } else {
                state.items.push(action.payload.item);
            }
            state.totalNumberOfItems = state.totalNumberOfItems + action.payload.item.quantity;
            state.totalAmount = state.totalAmount + action.payload.item.price;
        },
        remove_item(state, action) {
            const checkIfItemExist = state.items.findIndex(
                (item) => item.id === action.payload.item.id
            );
            const check = state.items[checkIfItemExist];
            state.totalAmount = state.totalAmount - action.payload.item.price;
            state.totalNumberOfItems = state.totalNumberOfItems - action.payload.item.quantity;
            if (check.quantity === 1) {
                state.items = state.items.filter(item => item.id !== action.payload.item.id);
            } else {
                check.quantity = check.quantity - 1
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;