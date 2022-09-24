import { useState } from "react";
import CheckOutInfoProductItem from "./CheckOutInfoProductItem/CheckOutInfoProductItem";

export default function CheckOutInfoProduct() {
  const [isShow,setIsShow]= useState(false)
  
  return (
    <>
      <div className="title">
        <div>
          <h4>Thông tin đơn hàng</h4>
          <span onClick={()=>setIsShow(!isShow)} className="inner">13 sản phẩm ( Xem chi tiết)</span>
        </div>
        <span>Sửa đổi </span>
      </div>
      {
      isShow ? <ul className="infoProduct">
        <CheckOutInfoProductItem/>  
      </ul> : ''
    }
    </>
  )
}
