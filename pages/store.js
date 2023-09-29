import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reducer/slices/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})