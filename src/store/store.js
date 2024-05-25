import { configureStore } from "@reduxjs/toolkit";
import { sneakers } from "../api/Sneakers";
import { basket } from "../api/Basket";
// import { statusOfBasket } from "../redux/statusOfBasket"
const store = configureStore({
    reducer : {
        [sneakers.reducerPath] : sneakers.reducer,
        [basket.reducerPath] : basket.reducer,
        // statusOfBasket : statusOfBasket
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(sneakers.middleware,basket.middleware)
})
export default store;