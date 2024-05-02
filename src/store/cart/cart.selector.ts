
import { createSelector } from "reselect";
import { RootState } from "../root.reducer";


// Define a selector to get the cart slice from the RootState
const selectCartReducer = (state: RootState) => state.cart

// Define a memoized selector to get the products array from the cart slice. it will recompute its value only if the result of selectCartReducer changes. The selector function inside createSelector extracts the products array from the cart slice.
export const selectProducts = createSelector(
    [selectCartReducer],            // Dependencies for the selector, in this case, just the cart slice
    cart => cart.products           // Selector function to extract the products array from the cart slice
)

export const selectTotalItems = createSelector(
    [selectCartReducer],
    cart => cart.totalItems
)

export const selectTotalPrice = createSelector(
    [selectCartReducer],
    cart => cart.totalPrice
)