// store.js or store/index.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./ProductSlice"; // Corrected naming convention for consistency

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer // Corrected reducer name to match slice name
    },
    // Optional: Add middleware, enhancers, or devTools configuration as needed
    // devTools: process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
});

export default store;
