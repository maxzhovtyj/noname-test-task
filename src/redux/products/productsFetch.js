import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({category}) => {
    console.log(category)
    try {
        const response = await axios.get(`https://dummyjson.com/products/category/${category}`)

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
