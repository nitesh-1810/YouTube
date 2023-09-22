import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // Doing splice to remove messaage from top , to help in DOM not be overloaded.
      state.messages.splice(10, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
