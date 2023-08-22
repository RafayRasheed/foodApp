import { createSlice } from "@reduxjs/toolkit";
import { deleteLogin, getLogin, setLogin } from "../components/functions/storageMMKV";

const dataReducer = createSlice({
    name: "data",
    initialState: {
        nearby: [],
        recommend: [],
        AllItems: [],
        AllRest: [],
    },
    reducers: {

        setNearby(state, action) {
            state.nearby = action.payload
        },
        setRecommend(state, action) {
            state.recommend = action.payload
        },
        setAllItems(state, action) {
            state.AllItems = action.payload
        },
        setAllRest(state, action) {
            state.AllRest = action.payload
        },


    },
});

export const { setNearby, setRecommend, setAllItems, setAllRest } = dataReducer.actions;
export default dataReducer.reducer;
