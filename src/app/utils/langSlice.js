import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:"lang",
    initialState:{
    lang:"en"
},
reducers:{
    ChangeLang:(state,action)=>{
        state.lang= action.payload

    }
}
})

export default langSlice.reducer

export const {ChangeLang}=langSlice.actions