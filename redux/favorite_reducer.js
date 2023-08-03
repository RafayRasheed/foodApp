import { createSlice } from "@reduxjs/toolkit";

const favoriteReducer = createSlice({
    name: "favorite",
    initialState: {
        favoriteRestuarnt: [],
        favoriteItem: [],
    },
    reducers: {
        addFavoriteRest(state, action) {
            state.favoriteRestuarnt.push(action.payload.resId)
        },
        removeFavoriteRest(state, action) {
            state.favoriteRestuarnt = state.favoriteRestuarnt.filter(resId => action.payload.resId != resId)
        },
        setFavoriteRest(state, action) {
            state.favoriteRestuarnt = action.payload.favoriteRestuarnt
        },


        addFavoriteItem(state, action) {

        },
        removeFavoriteItem(state, action) {

        },
        setFavoriteItem(state, action) {

        }

    },
});

export const { addFavoriteRest, removeFavoriteRest, setFavoriteRest,
    addFavoriteItem, removeFavoriteItem, setFavoriteItem } = favoriteReducer.actions;
export default favoriteReducer.reducer;
