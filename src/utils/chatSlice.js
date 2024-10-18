import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_REMOVE_INDEX } from "./constants";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage: (state, action)=>{
            //removes the element at index specified to LIVE_CHAT_REMOVE_INDEX from the messages array, modifying the original array directly.
            // first argument - from which index removal starts
            // second argument- how many elements need to be removed
            //(This splicing is doing bcz- the loading of infinite data in the UI cause hanging of page)
            // to avoid this while adding removing one after a specific index
            state.messages.splice(LIVE_CHAT_REMOVE_INDEX, 1);
            state.messages.push(action.payload)
        }
    }
});

export const { addMessage} = chatSlice.actions;
export default chatSlice.reducer;