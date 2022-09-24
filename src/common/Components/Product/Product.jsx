import { useSelector } from "react-redux";
import { selectProductsState } from "../../redux/features/products/productsSelector";
import ProductItem from "./ProductItem/ProductItem";
export default function Product({ size, isShowAll }) {
  const products = useSelector(selectProductsState)
  console.log(size)
  return (
    <div className="product">
      <div className="product__wp">
        {products && products.map((item, index) => {
          if (index < size) {
            return (
              <ProductItem
                key={index}
                codeProduct={item.codeProduct}
                name={item.name}
                image={item.image}
                price={item.price}
                point={item.point}
                sale={item.sale}
              />
            );
          }
        })}
      </div>
      {
        isShowAll ? <div className="showAll">
          <span>XEM TẤT CẢ   <i className="fa-solid fa-chevron-right"></i></span>
        </div> : ''
      }
    </div>
  );
}
