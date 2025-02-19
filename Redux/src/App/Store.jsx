import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/slice"

const store = configureStore({
    reducer : {
        counterReducer : counter
    }
})

export {store}
