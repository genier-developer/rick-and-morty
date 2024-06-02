import {configureStore} from "@reduxjs/toolkit";
import {rickAndMortyApi} from "./services/rickAndMortyApi.ts";

export const store = configureStore({
    reducer: {
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rickAndMortyApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
