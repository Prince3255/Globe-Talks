import { configureStore } from "@reduxjs/toolkit";
import { NewsApi } from "./NewsApi/GoogleNews";
// import newsReducer from "./Feature/NewsSlice"
import { setupListeners } from '@reduxjs/toolkit/query';

export const Store = configureStore({
    reducer: {
        // news: newsReducer,
        [NewsApi.reducerPath] : NewsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(NewsApi.middleware)
})

setupListeners(Store.dispatch);