import React from "react";
import CheckOutAddress from "./CheckOutAddress/CheckOutAddress";
import CheckOutGift from "./CheckOutGift/CheckOutGift";
import CheckOutInfoProduct from "./CheckOutInfoProduct/CheckOutInfoProduct";
import CheckOutPayment from "./CheckOutPayment/CheckOutPayment";
import CheckOutProduct from "./CheckOutProduct/CheckOutProduct";
import CheckOutShip from "./CheckOutShip/CheckOutShip";

export default function CheckOut() {
  return (
    <div className="checkout">
      <div className="checkout__title">
        <div className="container">
          <h4>Thanh toán</h4>
        </div>
      </div>
      <div className="container">
        <div className="checkout__content breadcrumb">
          <div className="checkout__content___breadcrumb breadcrumb__content">
            <ul className="main">
              <li className="main__item">Supership</li>
              <li className="main__item">Người dùng</li>
              <li className="main__item">Thanh toán</li>
            </ul>
          </div>
          <div className="checkout__content___main">
            <div className="checkout__content___main____wp">
              <div className="left">
                <div className="title">
                  {/*Ship */}
                  <CheckOutShip />
                </div>
                <ul className="main">
                  <CheckOutProduct />
                  <CheckOutProduct />
                  <CheckOutProduct />
                </ul>
                <div className="selectBuy">
                  <CheckOutPayment />
                </div>
              </div>
              <div className="right">
                <div className="header">
                  {/** Address **/}
                  <CheckOutAddress />
                </div>
                <div className="main">
                  <div className="main__gift">
                    <span>
                      <i className="fa-solid fa-gift fa-size" /> Mã giảm giá
                    </span>
                    <span>
                      Có thể chọn (2)
                      <i className="fa-solid fa-circle-info fa-size" />
                    </span>
                  </div>
                  <>
                    {/** Gift **/}
                    <CheckOutGift />
                  </>
                  <div className="main__input">
                    <input
                      placeholder="Mã giảm giá của bạn "
                      type="text"
                      name=""
                      id=""
                    />
                    <button>Áp dụng</button>
                  </div>
                </div>
                <div className="infoCheckOut">
                  {/* Info Product */}
                  <CheckOutInfoProduct/>
                </div>
                <div className="footer">
                  <ul className="price__main">
                    <li className="price__main___item">
                      <span>Tạm tính </span>
                      <span className="boldPrice">439.000 đ</span>
                    </li>
                    <li className="price__main___item">
                      <span>Giảm giá </span>
                      <span className="boldPrice salePrice"> -39.000 đ</span>
                    </li>
                  </ul>
                  <div className="price__result">
                    <h4>Tổng tiền</h4>
                    <div className="w">
                      <span>420.000đ </span>
                      <p>( Đã bao gồm VAT nếu có )</p>
                    </div>
                  </div>
                  <div className="buy">
                    <button type="button" className="btn btn-buy">
                      <i className="fa-solid fa-bag-shopping" /> ĐẶT NGAY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
