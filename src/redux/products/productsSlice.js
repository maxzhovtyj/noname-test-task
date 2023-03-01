import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts} from "./productsFetch";

const initialState = {
    products: [],
    status: null,
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "pending"
            state.error = null
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.products = action.payload.products
        })

        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = "rejected"
            state.products = []
        })
    }
})

export default productsSlice.reducer
