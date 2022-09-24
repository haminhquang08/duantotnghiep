export default function CheckOutProductItem() {
  return (
    <div className="productCart">
      <div className="productCart__image">
        <img
          src="https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp"
          alt=""
        />
      </div>
      <div className="productCart__name productCart__nameMobile">
        <p>Lẩu cay trùng khách siêu ngon ( Cay gấp đôi )</p>
        <div className="productCart__price productCart__priceMobile">
          <div className="pricew1">
            <span>146.000đ</span>
          </div>
          <div className="pricew2">
            <span>130.000đ </span>
          </div>
          <div className="salePrice">
            <span>
              Giảm giá 43%
              <i className="fa-solid fa-arrow-trend-down fa-size" />
            </span>
          </div>
        </div>
      </div>
      <div className="productCart__name">
        <p>Lẩu cay trùng khách siêu ngon ( Cay gấp đôi )</p>
      </div>
      <div className="productCart__price">
        <div className="pricew1">
          <span>146.000đ</span>
        </div>
        <div className="pricew2">
          <span>130.000đ </span>
        </div>
        <div className="salePrice">
          <span>
            Giảm giá 43%
            <i className="fa-solid fa-arrow-trend-down fa-size" />
          </span>
        </div>
      </div>
      <div className="productCart__quality">
        <div className="inner">
          <span>Số lượng : 324 </span>
        </div>
      </div>
      <div className="productCart__priceResult">
        <span>450.000đ </span>
      </div>
      <div className="productCart__ship">
        <img src="./public/images/ghn.png" alt="" />
      </div>
    </div>
  )
}
