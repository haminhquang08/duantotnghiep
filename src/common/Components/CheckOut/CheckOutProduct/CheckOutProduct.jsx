import CheckOutProductItem from "./CheckOutProductItem/CheckOutProductItem";

export default function CheckOutProduct() {
    return (
  <li className="main__item">
    <div className="main__item___header">
      <div className="comboGiftShip">
        <span className="name"> Combo khuyến mãi </span>
        <p>Mua thêm 10 sản phẩm để được giảm 25%</p>
      </div>
    </div>
    <div className="main__item___main">
      <div className="dateShip">
        <span>
          <i className="fa-solid fa-clock" /> Sản phẩm này dự
          kiến giao hàng ngày 24-10-2022
        </span>
      </div>
      <div className="main__item___main____scroll">
        <CheckOutProductItem/>
      </div>
    </div>
  </li>
    )
}
