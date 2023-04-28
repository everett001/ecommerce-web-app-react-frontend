import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    DUMMY_DATA: [
        {
            id: '111',
            img: 'https://media.gq.com/photos/599a64b2d48ec673e16de47d/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-jordan.jpg',
            title: 'Air Jordan 1 x Virgil Abloh',
            color: 'Red',
            price: '299'
        },
        {
            id: '222',
            img: 'https://media.gq.com/photos/599a64b138899e6ab3b11aee/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-zoom-vaporfly.jpg',
            title: 'Nike Zoom Vaporfly x Virgil Abloh',
            color: 'White',
            price: '299'
        },
        {
            id: '333',
            img: 'https://media.gq.com/photos/599a64b08aaf3516506b9655/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-blazer.jpg',
            title: 'Nike Blazer x Virgil Abloh',
            color: 'White',
            price: '299'
        },
        {
            id: '444',
            img: 'https://media.gq.com/photos/599a64b06b4c0e160ac51606/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-vapor-max.jpg',
            title: 'Nike Air VaporMax x Virgil Abloh',
            color: 'Black',
            price: '299'
        },
        {
            id: '555',
            img: 'https://media.gq.com/photos/599a64b0d48ec673e16de479/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-max-90.jpg',
            title: 'Nike Air Max 90 x Virgil Abloh',
            color: 'White',
            price: '299'
        },
        {
            id: '666',
            img: 'https://media.gq.com/photos/599a64afd9e6b31cec0323d2/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-chuck-taylor.jpg',
            title: 'Converse Chuck Taylor x Virgil Abloh',
            color: 'White',
            price: '299'
        },
        {
            id: '777',
            img: 'https://media.gq.com/photos/599a64b1d48ec673e16de47b/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-react-hyperfly.jpg',
            title: 'Nike React Hyperdunk 2017 x Virgil Abloh',
            color: 'White',
            price: '299'
        },
        {
            id: '888',
            img: 'https://media.gq.com/photos/599a64af38899e6ab3b11aec/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-max-97.jpg',
            title: 'Nike Air Max 97 x Virgil Abloh',
            color: 'White',
            price: '299'
        },
        {
            id: '999',
            img: 'https://media.gq.com/photos/599a64b101e054755c42cb0d/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-presto.jpg',
            title: 'Nike Air Presto x Virgil Abloh',
            color: 'Black',
            price: '299'
        },
        {
            id: '101010',
            img: 'https://media.gq.com/photos/599a64af8aaf3516506b9653/master/w_1920%2Cc_limit/virgil-abloh-the-ten-nike-air-force-one.jpg',
            title: 'Nike Air Force 1 Low x Virgil Abloh',
            color: 'White',
            price: '299'
        },
    ],
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