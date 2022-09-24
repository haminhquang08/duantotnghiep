import { createAsyncThunk } from "@reduxjs/toolkit";
import RequestServices from "../../services/request-services";

export const getListProvinces = createAsyncThunk('getListProvinces',
  async () => {
    const data = await RequestServices.get(process.env.NEXT_PUBLIC_ADDRESS_VIETNAM)
    console.log("DAT", data)
    const responsive = await RequestServices.get(process.env.NEXT_PUBLIC_ADDRESS_VIETNAM)

    return {
      data: responsive.data,
      status: responsive.status
    }
  }
)
