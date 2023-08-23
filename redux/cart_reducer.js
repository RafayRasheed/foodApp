import { createSlice } from "@reduxjs/toolkit";
import { setCartLocal } from "../components/functions/storageMMKV";

const cartReducer = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addCart(state, action) {
            let cart = []
            let checkRest = null

            state.cart.map((res) => {
                if (res.restaurant.uid == action.payload.restaurant.uid) {
                    checkRest = res
                }
                else {
                    cart.push(res)
                }
            })
            // Item Restaurant Exists
            if (checkRest != null) {
                let cartItems = []
                let checkItem = null
                let itemIndex = null
                checkRest.cartItems.map((item, i) => {
                    if (item.item.id == action.payload.item.id && (item.item.optionsId == action.payload.item.optionsId)) {
                        checkItem = item
                        itemIndex = i
                    }
                    else {

                        cartItems.push(item)
                    }

                })
                // Item Already Exists
                if (checkItem != null) {



                    checkRest.cartItems[itemIndex].quantity += action.payload.quantity
                    checkRest.cartItems[itemIndex].totalPrice += action.payload.totalPrice
                    // checkRest.subTotal += action.payload.totalPrice
                    // cartItems.push(checkItem)
                    // cartItems.reverse()
                    // checkRest.cartItems = cartItems
                }
                else {

                    const formatItem = {
                        item: action.payload.item,
                        quantity: action.payload.quantity,
                        totalPrice: action.payload.totalPrice,
                    }
                    checkRest.cartItems.push(formatItem)
                    checkRest.cartItems.reverse()

                }
                checkRest.subTotal += action.payload.totalPrice
                cart.push(checkRest)
                cart.reverse()
                state.cart = cart
            }
            else {
                const format = {
                    restaurant: action.payload.restaurant,
                    cartItems: [
                        {
                            item: action.payload.item,
                            quantity: action.payload.quantity,
                            totalPrice: action.payload.totalPrice,
                        }
                    ],
                    subTotal: action.payload.totalPrice
                }
                state.cart.push(format)
            }
            setCartLocal(state.cart)

        },
        removeItemCart(state, action) {
            restIndex = null
            checkRes = null
            state.cart.map((res, i) => {
                if (res.restaurant.uid == action.payload.resId) {
                    restIndex = i
                    checkRes = res
                    checkRes.cartItems = checkRes.cartItems.filter(item => item.item.id !== action.payload.item.Id && item.item.optionsId != action.payload.item.optionsId)
                    checkRes.subTotal -= action.payload.totalPrice

                }
            })
            if (checkRes != null) {
                state.cart[restIndex] = checkRes
            }
            setCartLocal(state.cart)

        },
        removeResCart(state, action) {
            state.cart = state.cart.filter(res => res.restaurant.uid !== action.payload.resId)
            setCartLocal(state.cart)

        },
        cartClear(state) {
            state.cart = []
            setCartLocal(state.cart)
        },
        setCart(state, action) {
            if (action.payload) {
                state.cart = action.payload
            }

        }
    },
});

export const { addCart, removeItemCart, removeResCart, cartClear, updateAmount, setCart } = cartReducer.actions;
export default cartReducer.reducer;
