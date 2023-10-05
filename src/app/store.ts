import { configureStore } from "@reduxjs/toolkit";
import { dictionaryApiSlice } from "../features/dictionary/dictionaryApiSlice";
import styleSettingsSlice from "../features/styleSettings/styleSettingsSlice";

export const store = configureStore({
    reducer: {
        styleSettings: styleSettingsSlice,
        [dictionaryApiSlice.reducerPath]: dictionaryApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(dictionaryApiSlice.middleware)
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>