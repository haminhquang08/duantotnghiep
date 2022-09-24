import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API } from "../../../constants/ApiLink";
import RequestServices from "../../services/request-services";

export const getListOrderUserByCodeUser = createAsyncThunk(
  "user/orderList",
  async (codeUser) => {
    const responsive = await RequestServices.get(
      BASE_API + "/orders",
      true,
      "",
      true
    );
    return {
      data: responsive.data,
      status: responsive.status,
    };
  }
);

export const getOrderDetailByCodeOrder = createAsyncThunk(
  "user/getOrderDetail",
  async (codeOrder) => {
    const responsive = await RequestServices.get(
      BASE_API + "/order/detailOrder"
    );
    return {
      data: responsive.data,
      status: responsive.status,
    };
  }
);
