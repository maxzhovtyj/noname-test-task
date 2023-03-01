import {createSlice} from "@reduxjs/toolkit";
import {fetchAllProducts, fetchProduct} from "./productsFetch";

export const priceASC = "priceASC"
export const priceDESC = "priceDESC"
export const popularASC = "popularASC"
export const popularDESC = "popularDESC"

const initialState = {
    products: [],
    product: {},
    status: null,
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        sortProducts(state, action) {
            console.log(action.payload)
            switch (action.payload) {
                case priceASC:
                    state.products.sort((a,b) => a.price > b.price ? 1 : -1)
                    break
                case priceDESC:
                    state.products.sort((a,b) => a.price > b.price ? -1 : 1)
                    break
                case popularASC:
                    state.products.sort((a,b) => a.rating > b.rating ? -1 : 1)
                    break
                case popularDESC:
                    state.products.sort((a,b) => a.rating > b.rating ? 1 : -1)
                    break

                default:
                    break
            }
        },
    },
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

export const {sortProducts} = productsSlice.actions

export default productsSlice.reducer
