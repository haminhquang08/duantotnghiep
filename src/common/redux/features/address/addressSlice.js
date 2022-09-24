const { createSlice } = require("@reduxjs/toolkit");
const { getListProvinces } = require("./addressThunks");

const addressSlice = createSlice({
  name: 'addressSlice',
  initialState: {
    data: null,
    loading: false,
    error: false,
    status: null,
    provinceUser: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getListProvinces.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getListProvinces.rejected, (state, action) => {
      console.log("ERROR", action)
      state.loading = false
      state.error = action.error
    })
    builder.addCase(getListProvinces.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload.data
      state.status = action.payload.status
    })
  },
})
//export const { } = addressSlice.actions
export default addressSlice.reducer

