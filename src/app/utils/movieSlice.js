import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movie:null},
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.movie = action.payload;
        }
    }

})

export default movieSlice.reducer;
export const {addNowPlayingMovies} = movieSlice.actions;