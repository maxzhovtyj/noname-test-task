import {createSlice} from "@reduxjs/toolkit";
import {fetchAllProducts, fetchProduct} from "./productsFetch";

const initialState = {
    products: [],
    product: {},
    status: null,
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.status = "pending"
            state.error = null
        })
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.products = action.payload.products
        })
        builder.addCase(fetchAllProducts.rejected, (state) => {
            state.status = "rejected"
            state.products = []
        })

        builder.addCase(fetchProduct.pending, (state) => {
            state.status = "pending"
            state.error = null
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.product = action.payload
        })
        builder.addCase(fetchProduct.rejected, (state) => {
            state.status = "rejected"
            state.product = {}
        })
    }
})

export default productsSlice.reducer
