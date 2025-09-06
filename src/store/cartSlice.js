import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const { id, image, name, price, quantity } = action.payload
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity = state.items.length;
            if (!existingItem) {
                state.items.push({
                    id,
                    name,
                    price: price * quantity,
                    image,
                    quantity
                })
            } else {
                existingItem.quantity += quantity;
                existingItem.price = existingItem.quantity * price
            }
            state.totalQuantity = state.items.length;
            state.totalPrice = state.items.reduce((acc, curr) => acc + curr.price, 0);

        },
        incrementItemCart(state, action) {
            const { id, price } = action.payload
            const existingItem = state.items.find((item) => item.id === id);

            existingItem.quantity += 1;
            existingItem.price = existingItem.quantity * price
            state.totalPrice = state.items.reduce((acc, curr) => acc + curr.price, 0);

        },
        decrementItemCart(state, action) {
            const { id, price } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            }

            existingItem.quantity -= 1;
            existingItem.price = existingItem.quantity * price
            state.totalQuantity = state.items.length;
            state.totalPrice = state.items.reduce((acc, curr) => acc + curr.price, 0);

        }
    }
})


export const actionsCart = cartSlice.actions;
export default cartSlice.reducer;