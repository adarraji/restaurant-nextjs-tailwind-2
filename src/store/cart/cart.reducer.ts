import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItemType } from "../../types/types"


export type CartStateType = {
    products: CartItemType[],
    totalItems: number,
    totalPrice: number
}


const INITIAL_STATE: CartStateType = {
    products: [],
    totalItems: 0,
    totalPrice: 0
}

const addItemtoProducts = (products: CartItemType[], itemToAdd: CartItemType) => {
    try {
        // CHECK IF ITEM ALREADY EXSISTS IN PRODUCTS ARRAY IN THE STATE
        const productInState = products.find(product => product.id === itemToAdd.id)

        // IF ITEM ALREADY EXSIST (NOT 'UNDEFINED'), UPDATE THE EXISTING PRODUCT'S QUANTITY AND PRICE WITHOUT DUPLICATING IT IN THE CART.
        if (productInState) {

            // UPDATE THE EXISTING PRODUCT'S QUANTITY AND PRICE WITHOUT DUPLICATING IT IN THE CART.
            const updatedProducts = products.map(product =>
                product.id === itemToAdd.id
                    ? {
                        ...product,
                        quantity: product.quantity + itemToAdd.quantity,
                        price: product.price + itemToAdd.price
                    }
                    : product  // Return unchanged product if IDs don't match
            )
            return updatedProducts
        } else {
            const updatedProducts = [...products, itemToAdd]
            return updatedProducts
        }
    } catch (error) {
        console.error("Error adding item to cart:", error)
        return products
    }
}


const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart(state: CartStateType, action: PayloadAction<CartItemType>) {
            const itemToAdd = action.payload
            state.products = addItemtoProducts(state.products, itemToAdd)
            state.totalItems += itemToAdd.quantity
            state.totalPrice += itemToAdd.price
        },
        removeFromCart(state: CartStateType, action: PayloadAction<CartItemType>) {
            const itemToRemove = action.payload
            state.products = state.products.filter(product => product.id !== itemToRemove.id)
            state.totalItems -= itemToRemove.quantity
            state.totalPrice -= itemToRemove.price
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer

