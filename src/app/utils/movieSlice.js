import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            // Consider adding error handling for invalid action payload
            if (!action.payload) return; // Handle potential missing payload
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            // Consider adding error handling for invalid action payload
            if (!action.payload) return; // Handle potential missing payload
            state.topRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            // Consider adding error handling for invalid action payload
            if (!action.payload) return; // Handle potential missing payload
            state.popularMovies = action.payload;
        }
    }
});

export default movieSlice.reducer;
export const { addNowPlayingMovies,addTopRatedMovies, addPopularMovies } = movieSlice.actions;
