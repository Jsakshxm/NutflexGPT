import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";
import movieSlice from "./movieSlice";
const store = configureStore({
    reducer:{
        user : userslice,
        movie: movieSlice

    }
})
export default store;