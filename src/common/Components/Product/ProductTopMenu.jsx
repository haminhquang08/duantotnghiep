import Product from "./Product";
export default function ProductTopMenu() {
  return (
    <>
      <div className="top">
        <div className="main__wp1___title">
          <h4>
            <lord-icon
              src="https://cdn.lordicon.com/fkytfmrm.json"
              trigger="hover"
              style={{ width: 40, height: 40 }}
            ></lord-icon>
            Gợi ý Menu hôm nay
          </h4>
        </div>
        <div className="main__wp1___content">
          <ul className="food">
            <li className="food__item active__item">
              <picture>
                <img
                  src="https://afamilycdn.com/150157425591193600/2022/2/15/1-16449087980291673297311-16449108699981816069985.jpeg"
                  alt=""
                />
              </picture>
              <p>Bữa cơm gia đình</p>
            </li>
            <li className="food__item">
              <picture>
                <img
                  src="https://cdn.quantrinhahang.edu.vn/wp-content/uploads/2019/06/fast-food-la-gi.jpg"
                  alt=""
                />
              </picture>
              <p>Đồ ăn nhanh</p>
            </li>
            <li className="food__item">
              <picture>
                <img
                  src="https://lauwang.vn/wp-content/uploads/2020/10/LAM03924.jpg"
                  alt=""
                />
              </picture>
              <p>Lẩu gia đình</p>
            </li>
            <li className="food__item">
              <picture>
                <img
                  src="https://cdn.tgdd.vn/Files/2020/08/11/1278766/cach-moi-nhanh-va-de-giup-luoc-ga-khong-rach-da-chat-gon-dep-doc-xong-chi-muon-thu-ngay-202201131530578368.jpg"
                  alt=""
                />
              </picture>
              <p>Gà luộc</p>
            </li>
            <li className="food__item">
              <picture>
                <img
                  src="https://cdn.tgdd.vn/Files/2020/08/11/1278766/cach-moi-nhanh-va-de-giup-luoc-ga-khong-rach-da-chat-gon-dep-doc-xong-chi-muon-thu-ngay-202201131530578368.jpg"
                  alt=""
                />
              </picture>
              <p>Gà luộc</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <Product />
      </div>
    </>
  );
}
