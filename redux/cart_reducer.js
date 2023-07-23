import { createSlice } from "@reduxjs/toolkit";

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
                if (res.restaurant.id == action.payload.restaurant.id) {
                    checkRest = res
                }
                else {
                    cart.push(res)
                }
            })
            if (checkRest != null) {
                let cartItems = []
                let checkItem = null
                let itemIndex = null
                checkRest.cartItems.map((item, i) => {
                    if (item.item.id == action.payload.item.id) {
                        checkItem = item
                        itemIndex = i
                    }
                    else {

                        cartItems.push(item)
                    }

                })
                if (checkItem != null) {
                    checkItem.quantity += action.payload.quantity
                    checkItem.totalPrice += action.payload.totalPrice
                    checkRest.subTotal += action.payload.totalPrice



                    cartItems.push(checkItem)
                    cartItems.reverse()
                    checkRest.cartItems = cartItems


                }
                else {
                    const formatItem = {
                        item: action.payload.item,
                        quantity: action.payload.quantity,
                        totalPrice: action.payload.totalPrice
                    }
                    checkRest.cartItems.push(formatItem)
                    checkRest.subTotal += action.payload.totalPrice

                }
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
                            totalPrice: action.payload.totalPrice
                        }
                    ],
                    subTotal: action.payload.totalPrice
                }
                state.cart.push(format)
            }

        },
        removeCart(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
            state.amount -= action.payload.totalPrice
        },
        cartClear(state) {
            state.cart = []
            state.amount = 0
        },
        updateAmount(state, action) {
            state.amount += action.payload
        }
    },
});

export const { addCart, removeCart, cartClear, updateAmount } = cartReducer.actions;
export default cartReducer.reducer;