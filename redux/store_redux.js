const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from './cart_reducer'

const storeRedux = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default storeRedux