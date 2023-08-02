const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from './cart_reducer'
import favoriteReducer from './favorite_reducer';

const storeRedux = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer,
    }
})

export default storeRedux