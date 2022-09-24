export const selectProductsState = (state) => state.productsSlice.products;
export const selectProductPageCount = (state) => state.productsSlice.pageCount;
export const selectProductTotalElement = (state) => state.productsSlice.totalElement;
export const selectProductsLoadingSearch = state => state.productsSlice.loading;
