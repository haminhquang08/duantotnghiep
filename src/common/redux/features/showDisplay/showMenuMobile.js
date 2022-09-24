import { createSlice } from "@reduxjs/toolkit";

const showMenuMobile = createSlice({
  name: "isDisplayMobile",
  initialState: {
    display: false,
  },
  reducers: {
    showMenuMobileDisplay: (state) => {
      return (state = {
        display: true,
      });
    },
    hideMenuMobileDisplay: (state) => {
      return (state = {
        display: false,
      });
    },

  },
});

export const { showMenuMobileDisplay, hideMenuMobileDisplay } = showMenuMobile.actions;
export default showMenuMobile.reducer;
