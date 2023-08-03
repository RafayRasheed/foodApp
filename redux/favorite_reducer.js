import { createSlice } from "@reduxjs/toolkit";
import { uploadFavouriteFirebase } from "../components/functions/firebase";

const favoriteReducer = createSlice({
    name: "favorite",
    initialState: {
        favoriteRestuarnt: [],
        favoriteItem: [],
    },
    reducers: {
        addFavoriteRest(state, action) {
            const s = state.favoriteRestuarnt
            s.push(action.payload.resId)
            s.reverse()
            state.favoriteRestuarnt = s
            uploadFavouriteFirebase(state.favoriteRestuarnt, 'res')

        },
        removeFavoriteRest(state, action) {
            state.favoriteRestuarnt = state.favoriteRestuarnt.filter(resId => action.payload.resId != resId)
            uploadFavouriteFirebase(state.favoriteRestuarnt, 'res')

        },
        setFavoriteRest(state, action) {
            state.favoriteRestuarnt = action.payload
        },


        addFavoriteItem(state, action) {
            const s = state.favoriteItem
            s.push(action.payload)
            s.reverse()
            state.favoriteItem = s
            uploadFavouriteFirebase(state.favoriteItem, 'item')

        },
        removeFavoriteItem(state, action) {
            state.favoriteItem = state.favoriteItem.filter(data => action.payload.itemId != data.itemId)
            uploadFavouriteFirebase(state.favoriteItem, 'item')
        },
        setFavoriteItem(state, action) {
            state.favoriteItem = action.payload

        }

    },
});

export const { addFavoriteRest, removeFavoriteRest, setFavoriteRest,
    addFavoriteItem, removeFavoriteItem, setFavoriteItem } = favoriteReducer.actions;
export default favoriteReducer.reducer;
