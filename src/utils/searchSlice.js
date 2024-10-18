import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResults: (state, action)=>{
            state= Object.assign(state, action.payload);
        }
    }
})

//export the action-> cacheResults
export const {cacheResults}= searchSlice.actions;

//export the reducer
export default searchSlice.reducer;