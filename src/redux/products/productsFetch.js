import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async ({category}) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`)

        checkResponseData(response.data)

        return response.data
    } catch (e) {
        return e.message
    }
})

export const fetchProduct = createAsyncThunk('products/fetchProduct', async ({id}) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)

        checkResponseData(response.data)

        return response.data
    } catch (e) {
        return e.message
    }
})

const checkResponseData = (data) => {
    if (!data) {
        throw new Error("invalid response data")
    }
}
