import { combineReducers } from "@reduxjs/toolkit";
import addressSlice from "../features/address/addressSlice";
import authSlice from "../features/auth/authSlice";
import backgroundFixedSlice from "../features/backgroundFixed/backgroundFixedSlice";
import cartSlice from "../features/cart/cartSlice";
import commentSlice from "../features/comment/commentSlice";
import notificationSlice from "../features/notification/notificationSlice";
import productSlice from "../features/product/productSlice";
import productsSlice from "../features/products/productsSlice";
import SearchSlice from "../features/Search/SearchSlice";
import showDisplaySlice from "../features/showDisplay/showDisplaySlice";
import showMenuMobile from "../features/showDisplay/showMenuMobile";
import showSearchDisplaySlice from "../features/showDisplay/showSearchDisplaySlice";
import userSlice from "../features/User/userSlice";

export default combineReducers({
  showDisplaySlice,
  authSlice,
  userSlice,
  showSearchDisplaySlice,
  showMenuMobile,
  SearchSlice,
  productSlice,
  productsSlice,
  cartSlice,
  notificationSlice,
  commentSlice,
  backgroundFixedSlice,
  addressSlice
});
