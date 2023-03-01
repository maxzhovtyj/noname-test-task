import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    status: null,
    error: null,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getCartProducts(state) {
            state.products = JSON.parse(localStorage.getItem("cart")) || []
        },
        addToCart(state, action) {
            state.products.push(action.payload)

            let cart = JSON.parse(localStorage.getItem("cart")) || []
            cart.push(action.payload)

            localStorage.setItem("cart", JSON.stringify(cart))
        },
        removeFromCart(state, action) {

        },
    },
})

export const {getCartProducts, addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer
