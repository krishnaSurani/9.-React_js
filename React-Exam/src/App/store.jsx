import { configureStore } from "@reduxjs/toolkit";
import  apiSlice  from "../Features/apiSlice";


export const store=configureStore({
    reducer:{
        apiReducer : apiSlice
    }
})