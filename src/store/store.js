import { configureStore } from "@reduxjs/toolkit";
import { sneakers } from "../api/Sneakers";
import { basket } from "../api/Basket";
import { booksmarks } from "../api/Booksmarks";
const store = configureStore({
  reducer: {
    [sneakers.reducerPath]: sneakers.reducer,
    [basket.reducerPath]: basket.reducer,
    [booksmarks.reducerPath]: booksmarks.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sneakers.middleware,
      basket.middleware,
      booksmarks.middleware
    ),
});

export default store;
