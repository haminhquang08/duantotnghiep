const { createSlice } = require("@reduxjs/toolkit");
const { fetchProducts, fetchProductsByFilterParams, getProductsByName } = require("./productsThunks");

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    pageCount: 1,
    totalElement: 0,
    loading: true,
    error: null,
  },
  reducers: {
    setProduct: (state, action) => {
      if (action.payload.products) {
        state.products = action.payload.products;
        state.loading = true;
      } else {
        state.products = [];
      }
    },
    removeProduct: (state, action) => {
      if (action.payload.codeProduct) {
        state.products = state.products.filter((product) => product.codeProduct !== action.payload.codeProduct);
        state.loading = true;
      }
    },
    restState: () => {
      return state;
    },
  },
  extraReducers: (builder) => {
    /** Get API Redux - Thunk */
    /** Get Products */
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload.items;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.error
      state.loading = true
    });

    /** Get Products By Name */
    builder.addCase(getProductsByName.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getProductsByName.fulfilled, (state, action) => {
      state.products = action.payload.products
      state.loading = false;
    })
    builder.addCase(getProductsByName.rejected, (state, action) => {
      state.products = 'error'
      state.loading = true;
    })
  },
});

export const { setProduct, removeProduct } = productsSlice.actions
export default productsSlice.reducer;
