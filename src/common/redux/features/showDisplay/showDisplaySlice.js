import { createSlice } from "@reduxjs/toolkit";

const showDisplaySlice = createSlice({
  name: "isDisplay",
  initialState: {
    display: false,
  },
  reducers: {
    showDisplay: (state) => {
      return (state = {
        display: true,
      });
    },
    hideDisplay: (state = initialState) => {
      return (state = {
        display: false,
      });
    },

  },
});

export const { showDisplay, hideDisplay } = showDisplaySlice.actions;
export default showDisplaySlice.reducer;
