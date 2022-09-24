const { createSlice } = require("@reduxjs/toolkit");

const backgroundFixedSlice = createSlice({
  name: 'backgroundFixed',
  initialState: {
    valueBackground: {
      isActive: false,
      image: '',
      type: null,
      code: null
    }
  },
  reducers: {
    addBackground: (state, action) => {
      let currentValueBackground = { ...state.valueBackground }
      if (action.payload.valueBackground) {
        currentValueBackground = action.payload.valueBackground
        state.valueBackground = currentValueBackground
      }
      return state;
    },
  }
})

export const { addBackground } = backgroundFixedSlice.actions
export default backgroundFixedSlice.reducer
