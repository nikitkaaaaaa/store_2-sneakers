import { configureStore } from "@reduxjs/toolkit";
import { sneakers } from "../api/Sneakers";
import { basket } from "../api/Basket";
import { booksmarks } from '../api/Booksmarks'
import checkbasketReducer from "../redux/checkbasket"; 

const store = configureStore({
    reducer: {
        [sneakers.reducerPath]: sneakers.reducer,
        [basket.reducerPath]: basket.reducer,
        [booksmarks.reducerPath] : booksmarks.reducer,
        checkbasket: checkbasketReducer 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sneakers.middleware, basket.middleware,booksmarks.middleware)
})

export default store;