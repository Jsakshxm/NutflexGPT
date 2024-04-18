import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userslice";
import moviesReducer from "./movieSlice"; // Rename the import
import gptReducer from "./gptSlice";
import langReducer from "./langSlice";

const store = configureStore({
    reducer:{
        user: userslice,
        movies: moviesReducer ,
        gpt:gptReducer,
        lang:langReducer
    }
});

export default store;
