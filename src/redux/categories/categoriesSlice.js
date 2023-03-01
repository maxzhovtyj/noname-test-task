import {createSlice} from "@reduxjs/toolkit";
import {fetchAllCategories} from "./categoriesFetch";

const initialState = {
    categories: [],
    status: null,
    error: null,
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAllCategories.pending, (state) => {
                state.status = "pending"
                state.error = null
            })
            .addCase(fetchAllCategories.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.categories = action.payload
            })
    }
})

export default categoriesSlice.reducer
