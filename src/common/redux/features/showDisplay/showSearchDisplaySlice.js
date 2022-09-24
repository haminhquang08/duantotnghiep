import { createSlice } from "@reduxjs/toolkit";

const showSearchDisplaySlice = createSlice({
  name: "isDisplaySearch",
  initialState: {
    display: false,
  },
  reducers: {
    showDisplay: (state) => {
      return state = {
        display: true,
      };
    },
    hideDisplay: (state) => {
      return state = {
        display: false,
      };
    },

  },
});

export const { showDisplay, hideDisplay } = showSearchDisplaySlice.actions;
export default showSearchDisplaySlice.reducer;
