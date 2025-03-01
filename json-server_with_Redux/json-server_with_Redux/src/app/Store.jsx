import { configureStore } from "@reduxjs/toolkit";
import  apiSlice  from "../features/apiSlice";


export const Store=configureStore({
    reducer:{
        apiReducer:apiSlice,
    }
})