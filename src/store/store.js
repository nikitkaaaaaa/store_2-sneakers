import { configureStore } from "@reduxjs/toolkit";
import { sneakers } from "../api/Sneakers";
import { basket } from "../api/Basket";

const store = configureStore({
    reducer : {
        [sneakers.reducerPath] : sneakers.reducer,
        [basket.reducerPath] : basket.reducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(sneakers.middleware,basket.middleware)
})
export default store;