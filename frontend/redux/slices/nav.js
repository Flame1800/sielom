import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        dropdownContent: null,
        breadCrumbs: []
    },
    reducers: {
        setDropdownContent(state, action) {
            state.dropdownContent = action.payload
        }
    }
})

export const { setDropdownContent } = navSlice.actions
export const navReducer = navSlice.reducer