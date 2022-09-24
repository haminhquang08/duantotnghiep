import { login, register } from "./authThunk";

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth-slice",
  initialState: {
    isLogin: false,
    isRegister: false,
    errors: {},
    error: "",
    loading: false,
  },
  reducers: {
    setAuthLoadingState: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
  extraReducers: (builder) => {
    /**Login user Auth */
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogin = action.payload.data;
    });

    /** Register User Auth */
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.isLogin = action.payload.isRegister;
    });
  },
});
export const { setAuthLoadingState } = authSlice.actions;
export default authSlice.reducer;
