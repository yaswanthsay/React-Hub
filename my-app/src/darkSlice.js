import { createSlice } from '@reduxjs/toolkit'


export const darkSlice = createSlice({
    name: "mode",
    initialState: {
        value: false,
    },
    reducers: {
        darkMode: (state) => {
            state.value =true
        },
        lightMode: (state) => {
            state.value =false
        }

    }
})


export const { darkMode, lightMode } = darkSlice.actions
export default darkSlice.reducer

