import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: { showGpt: true,
        Results:null,
        GptMov:null},
    reducers: {
        toggleGpt: (state, action) => {
            state.showGpt = !state.showGpt;
        },
        addGptMovies:(state,action)=>{
            const {Results,GptMov}=action.payload
            state.GptMov=GptMov
            state.Results=Results
        }
    }
});

export const { toggleGpt,addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;
