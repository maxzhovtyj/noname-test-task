import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCategories = createAsyncThunk('categories/fetchCategories', async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products/categories')
        return response.data
    } catch (e) {
        return e.message
    }
})
