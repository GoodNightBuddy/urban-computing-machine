import {configureStore} from "@reduxjs/toolkit";
import charactersReducer, {loadState} from './reducers/characters/charactersSlice'

export const store = configureStore({
    reducer: {
        characters: charactersReducer
    },
    preloadedState: loadState()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch