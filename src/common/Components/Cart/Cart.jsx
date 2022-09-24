import Link from "next/link";
import { useSelector } from "react-redux";
import { RouterLinkConfig } from "../../constants/RouterLink";
import { selectCartProducts } from "../../redux/features/cart/cartSelects";
import BreadCrumb from "../Breadcrumb/BreadCrumb";
import CartItem from "./CartItem/CartItem";
import CartPay from "./CartPay/CartPay";

export default function Cart() {
  const onOrder = (e) => {
    e.preventDefault();
  };
  const cartProductsRx = useSelector(selectCartProducts)
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__content breadcrumb">
          <div className="cart__content___breadcrumb breadcrumb__content">
            <BreadCrumb />
          </div>
          <div className="cart__content___main">
            <form onSubmit={onOrder}>
              <div className="cart__content___main____title">
                <Link href={RouterLinkConfig.index}>
                  <a>
                    <h4><i className="fa-solid fa-cart-shopping"></i>Giỏ hàng</h4>
                  </a>
                </Link>
              </div>
              <div className="cart__content___main____inner">
                <div className="left">
                  <div className="header">
                    <ul className="header__main">
                      <li className="header__main___item">
                        <input type="checkbox" className="" name="" id="" />
                        <label className="check-box" />
                        <span>
                          Tất cả ( {cartProductsRx.length} sản phẩm ){" "}
                        </span>
                      </li>
                      <li className="header__main___item price">
                        <span>Đơn giá </span>
                      </li>
                      <li className="header__main___item quality">
                        <span>Số lượng </span>
                      </li>
                      <li className="header__main___item priceResult">
                        <span>Thành tiền </span>
                      </li>
                      <li className="header__main___item remove">
                        <span>
                          <i className="fa-solid fa-delete-left" />
                        </span>
                      </li>
                    </ul>
                  </div>
                  <ul className="main">
                    <CartItem />
                  </ul>
                </div>
                <div className="right">
                  <CartPay />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
