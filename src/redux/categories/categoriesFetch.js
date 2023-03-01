import {createAsyncThunk} from "@reduxjs/toolkit";

import categories from "../../categories.json"

export const fetchAllCategories = createAsyncThunk('sidebar/fetchCategories', async () => {
    try {
        return JSON.parse(JSON.stringify(categories))
    } catch (e) {
        return e.message
    }
})
