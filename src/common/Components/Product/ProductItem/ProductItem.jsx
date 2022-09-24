import Link from "next/link";
import { RouterLinkConfig } from "../../../constants/RouterLink";
import { Slug } from "../../../lib/Slug/slug";

export default function ProductItem({
  codeProduct,
  sale,
  link,
  name,
  price,
  image,
  point,
  payQuality,
}) {
  const priceSale = (sale, price) => {
    let wpSale = sale / 100;
    let salePrice = price * wpSale;
    let resultPrice = price - salePrice;
    return resultPrice;
  };
  const formatMoneyVND = (money) => {
    const config = {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 9,
    };
    const formated = new Intl.NumberFormat("vi-VN", config).format(money);
    return formated;
  };
  return (
    <li className="product__wp___item">
      <Link href={RouterLinkConfig.productDetailL(Slug(name), codeProduct)}>
        <a>
          <div className="point">
            <span>{point}</span>
          </div>
          <div className="image">
            <picture>
              <img src={image} alt="" />
            </picture>
          </div>
          <div className="name">
            <p>{name}</p>
          </div>
          <div className="price">
            <span className="t1 text">{formatMoneyVND(price)}</span>
            <span className="t2 text">
              {formatMoneyVND(priceSale(sale, price))}
            </span>
          </div>
          <div className="sellable">
            <div className="col-1">
              <span>Đã bán : <b>124K</b></span>
            </div>
            <div className="col-1">
              <box-icon name='map'></box-icon>
              <b>3.km</b>
            </div>
          </div>
          <div className="address">

          </div>
        </a>
      </Link>
      <div className="btn">
        <button type="button">
          <i className="fa-solid fa-basket-shopping fa-size" />
          <span>
            Chọn mua
          </span>
        </button>
      </div>
    </li>
  );
}
