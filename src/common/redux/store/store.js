import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../reducers/rootReducers";

const initialState = {};
const middleware = [thunk];
export const store = configureStore({
  reducer: rootReducers,
});
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
