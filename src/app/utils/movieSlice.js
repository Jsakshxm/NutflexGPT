import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            // Consider adding error handling for invalid action payload
            if (!action.payload) return; // Handle potential missing payload
            state.nowPlayingMovies = action.payload;
        }
    }
});

export default movieSlice.reducer;
export const { addNowPlayingMovies } = movieSlice.actions;
