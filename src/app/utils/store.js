import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";
import moviesReducer from "./movieSlice"; // Rename the import

const store = configureStore({
    reducer:{
        user: userslice,
        movies: moviesReducer // Use the renamed import
    }
});

export default store;
