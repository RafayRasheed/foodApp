import { createSlice } from "@reduxjs/toolkit";

const favoriteReducer = createSlice({
    name: "favorite",
    initialState: {
        favorite: [],
    },
    reducers: {
        addFavorite(state, action) {

        },
        removeFavorite(state, action) {

        },

    },
});

export const { addFavorite, removeFavorite, } = favoriteReducer.actions;
export default favoriteReducer.reducer;
