import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AUTH_FORGOT,
  AUTH_LOGIN,
  AUTH_REGISTRATION,
  AUTH_USER_BY_TOKEN,
} from "../../../constants/ApiLink";
import RequestServices from "../../services/request-services";
import { setUser } from "../User/userSlice";

/** Auth Login */
export const login = createAsyncThunk(
  "auth/login",
  async ({ userData, history }, thunkApi) => {
    try {
      const responsive = await RequestServices.post(AUTH_LOGIN, userData);
      const tokenUser = responsive.data.accessToken;
      if (tokenUser) {
        RequestServices.get(AUTH_USER_BY_TOKEN, true, "", tokenUser)
          .then((res) => {
            if (res.data.user) {
              return thunkApi.dispatch(setUser(res.data.user));
            }
          })
          .catch((err) => {
            return thunkApi.rejectWithValue(err.responsive.data);
          });
      }
    } catch (error) {
      return thunkApi.rejectWithValue(err.responsive.data);
    }
  }
);

/** Auth Registration */
export const register = createAsyncThunk(
  "auth/register",
  async (userRegistration, thunkApi) => {
    console.log(userRegistration);
    try {
      const responsive = await RequestServices.post(
        AUTH_REGISTRATION,
        userRegistration
      );
      return {
        isRegister: responsive.data,
      };
    } catch (error) {
      return thunkApi.rejectWithValue(error.responsive.data);
    }
  }
);

/** Auth const forgot */
export const forgot = createAsyncThunk("auth/");
