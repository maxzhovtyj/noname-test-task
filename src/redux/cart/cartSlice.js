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
            let cart = JSON.parse(localStorage.getItem("cart")) || []
            cart.push(action.payload)

            localStorage.setItem("cart", JSON.stringify(cart))

            state.products = cart
        },
        removeFromCart(state, action) {
            let cart = JSON.parse(localStorage.getItem("cart")) || []

            cart = cart.filter(item => item.id !== action.payload)

            localStorage.setItem("cart", JSON.stringify(cart))

            state.products = cart
        },
    },
})

export const {getCartProducts, addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer
