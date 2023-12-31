import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./Slices/cartSlice"

const appStore = configureStore({
    /** The below reducer is mainly used to modify the appStore */
    /**It contains multiple reducers of different slices */
    reducer:{
        cart: cartReducer, //Each slice will have its own reducer
    }
}) // Used for creating the store

export default appStore