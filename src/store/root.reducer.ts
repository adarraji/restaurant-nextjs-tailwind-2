import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    cart:cartReducer
})

export type RootState = ReturnType<typeof rootReducer>