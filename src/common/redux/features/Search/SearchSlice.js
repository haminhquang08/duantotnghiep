const { createSlice, createAsyncThunk, current } = require("@reduxjs/toolkit");


/**Set Name AsyncThank **/
export const getMe = createAsyncThunk('search/getMe', async (params, thunkAPI) => {
  /** If dispatch another action, write as follows **/
  //thunkAPI.dispatch(....)

  //* Send User API **/
  //Create API Connect
  // const currentUser = await userAPI.getMe();
  //return currentUser
})

const SearchSlice = createSlice({
  name: "searchPage",
  initialState: {
    dataProduct: [],
    loading: false,
    error: ''
  },
  reducers: {
    search: (state, action) => {
      if (action.payload) {

      }
    }
  },
  extraReducers: {
    [getMe.pending]: (state) => {
      state.loading = true
    },
    [getMe.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error
    },
    [getMe.fulfilled]: (state, action) => {
      state.loading = false;
      state.dataProduct = action.payload
    }
  }

})

export const { search } = SearchSlice.actions
export default SearchSlice.reducer
