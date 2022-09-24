import LoadingSpinner from "../Loading/LoadingSpinner";
import Product from "./Product";

export default function ProductIdx({ title, image, products, size }) {
  return (
    <>
      <div className="main__wp1___title">
        <h4>
          <picture>
            <img src={image} alt="" />
          </picture>
          Khám phá quản mới
        </h4>
        <div className="alw">
          <i className="fa-size fa-solid fa-paperclip" />
        </div>
      </div>
      {products ? (
        <Product products={products} size={size} />
      ) : (

        <LoadingSpinner css={{ width: "100%", textAlign: "center" }} />
      )}
    </>
  );
}
