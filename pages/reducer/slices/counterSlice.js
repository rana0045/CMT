import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: true,
}

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {

        theme: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { theme } = counterSlice.actions

export default counterSlice.reducer