import { createSlice } from "@reduxjs/toolkit";


const ListApiSlice = createSlice({
    name:'listApi',
    initialState:{
        photos:"https://jsonplaceholder.typicode.com/photos"
    },
    reducers:{
    }
})

export  default ListApiSlice.reducer