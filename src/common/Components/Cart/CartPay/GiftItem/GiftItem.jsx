export default function GiftItem({ image, title, code }) {
  return (
    <li className="main__list___item">
      <div className="image">
        <picture>
          <img
            src="https://cdn.tgdd.vn/2020/04/GameApp/image-180x180.png"
            alt=""
          />
        </picture>
      </div>
      <i className="bd" />
      <div className="price">
        <span>Giảm ngay 20k</span>
      </div>
      <div className="btn">
        <button type="submit">Chọn</button>
      </div>
    </li>
  );
}
