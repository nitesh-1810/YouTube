import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    //Action
    /*toggleMenu: (state) => (state.isMenuOpen = !state.isMenuOpen)
     * This code not work because doing this' => (state.isMenuOpen = !state.isMenuOpen)' in arrow function means we return that statement.
     * To work this code we mofidy it like:
     * toggleMenu: (state) =>({isMenuOpen:!state.isMenuOpen})
     */
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
