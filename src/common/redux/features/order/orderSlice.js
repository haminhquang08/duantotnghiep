import {
  getListOrderUserByCodeUser,
  getOrderDetailByCodeOrder,
} from "./orderThunks";

const { createSlice } = require("@reduxjs/toolkit");

const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    dataOrder: null,
    loading: false,
    error: null,
    mess: null,
    status: null,
  },
  extraReducers: (builder) => {
    /**Get List Order User By Code */
    builder.addCase(getListOrderUserByCodeUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListOrderUserByCodeUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getListOrderUserByCodeUser.fulfilled, (state, action) => {
      state.loading = false;
      state.dataOrder = action.payload.data;
      state.status = action.payload.status;
    });

    /**Get Order Detail User By Code Order */
    builder.addCase(getOrderDetailByCodeOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrderDetailByCodeOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getOrderDetailByCodeOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.dataOrder = action.payload.data;
      state.status = action.payload.status;
    });
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
