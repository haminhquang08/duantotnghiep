const { createSlice } = require("@reduxjs/toolkit");

const notificationSlice = createSlice({
  name: "Notification ",
  initialState: {
    notifications: []
  },
  reducers: {
    addNotification: (state, action) => {
      state.notifications = [...state.notifications, { ...action.payload }]
      return state
    },
    removeNotification: (state, action) => {
      let currentNotication = [...state.notifications]
      state.notifications = currentNotication.filter(no => no.id !== action.payload.id)
      return state
    },
    removeNotificationAll: (state, action) => {
      let currentNotication = [...state.notifications];
      currentNotication = []
      state.notifications = currentNotication
      return state
    }
  }
})
export const { addNotification, removeNotification, removeNotificationAll } = notificationSlice.actions;
export default notificationSlice.reducer;
