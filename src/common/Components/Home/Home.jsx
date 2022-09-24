import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCode } from "../../redux/features/product/productThunks";
import { selectProductsState } from "../../redux/features/products/productsSelector";
import { fetchProducts } from "../../redux/features/products/productsThunks";
import Banner from "../Banner/Banner";
import Bannerbackup from "../Banner/Bannerbackup";
import Product from "../Product/Product";
import ProductTopMenu from "../Product/ProductTopMenu";
import Trademark from "../Trademark/Trademark";

export default function Home() {
  const dispatch = useDispatch()
  //const [product, setProduct] = useState([]);
  const products = useSelector(selectProductsState)
  useEffect(() => {
    dispatch(fetchProducts(1))
  }, []);
  return (
    <div className="bodyIdx">
      <div className="container">
        <Bannerbackup />
        <div className="main">
          <div className="main__wp1">
            <ProductTopMenu />
          </div>
        </div>
        <div className="main">
          <div className="main__wp1">
            <div className="main__wp1___title">
              <h4>
                <picture>
                  <img src={"/images/new-items.png"} alt="" />
                </picture>
                Khám phá quản mới
              </h4>
              <div className="alw">
                <i className="fa-size fa-solid fa-paperclip" />
              </div>
            </div>
            <Product size={12} isShowAll={true} />
          </div>
          <div className="main__wp1">
            <div className="main__wp1___title">
              <h4>
                <picture>
                  <img src={"/images/new-items.png"} alt="" />
                </picture>
                Khám phá quản mới
              </h4>
              <div className="alw">
                <i className="fa-size fa-solid fa-paperclip" />
              </div>
            </div>
            <Product size={12} isShowAll={true} />
          </div>
          <div className="main__wp1">
            <div className="main__wp1___title">
              <h4>
                <picture>
                  <img src={"/images/new-items.png"} alt="" />
                </picture>
                Khám phá quản mới
              </h4>
              <div className="alw">
                <i className="fa-size fa-solid fa-paperclip" />
              </div>
            </div>
            <Product size={12} isShowAll={true} />
          </div>
          <div className="main__wp1">
            <div className="main__wp1___title">
              <h4>
                <picture>
                  <img src={"/images/new-items.png"} alt="" />
                </picture>
                Khám phá quản mới
              </h4>
              <div className="alw">
                <i className="fa-size fa-solid fa-paperclip" />
              </div>
            </div>
            <Product size={12} isShowAll={true} />
          </div>
        </div>
        <Trademark />
      </div>
    </div>
  );
}
