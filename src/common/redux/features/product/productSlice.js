const { createSlice } = require("@reduxjs/toolkit");
const { getProductByName, getProductByCode } = require("./productThunks");

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    productDetail: null,
    loading: false,
    error: null,
  },
  reducers: {
    getProduct: (state, action) => {
      if (action.payload.nameProduct) {
      }
    },
    setProduct: (state, action) => {
      console.log(action.payload)
      if (action.payload.productDetail) {

      }
      return state;
    }
  },
  extraReducers: (builder) => {
    // Get product By Name
    builder.addCase(getProductByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductByName.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getProductByName.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetail = action.product;
      state.error = null;
    });
    // Get product By Name End

    // Get Product By Code
    builder.addCase(getProductByCode.pending, (state) => {
      state.productDetail = null;
      state.loading = true;
    });
    builder.addCase(getProductByCode.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error
    });
    builder.addCase(getProductByCode.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetail = action.payload.product[0]
    })

  },
});
export const { getProduct, setProduct } = productSlice.actions;
export default productSlice.reducer;
