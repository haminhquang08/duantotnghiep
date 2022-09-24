import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { GET_PRODUCT_BY_NAME } from "../../../constants/ApiLink"
import RequestServices from "../../services/request-services"

export const getProductByName = createAsyncThunk("product/getProductByName", async (name, id) => {
  const responsive = await RequestServices.get(GET_PRODUCT_BY_NAME(name, id))
  return {
    product: responsive.data.product,
    status: responsive.status
  }
})

export const getProductByCode = createAsyncThunk('product/getProductByCode', async (code) => {
  const url = `https://62f0bc86e2bca93cd23bd902.mockapi.io/api/product/product?codeProduct=${code}`;
  const responsive = await RequestServices.get(url).then(res => {
    if (res.data) {
      return {
        product: res.data,
        status: res.status
      }
    }
  }).catch(err => {
    return {
      err: err,
      status: res.status
    }
  })
  return {
    product: responsive.product,
    error: responsive.err,
    status: responsive.status
  }

})

