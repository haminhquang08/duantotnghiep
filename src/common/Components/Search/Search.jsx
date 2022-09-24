import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsLoadingSearch, selectProductsState } from "../../redux/features/products/productsSelector";
import { getProductsByName } from "../../redux/features/products/productsThunks";

//import Product from "../Product/Product";

const Product = dynamic(() => import('../Product/Product'), {
  ssr: false
})
export default function Search() {
  const loadingSearch = useSelector(selectProductsLoadingSearch)
  const router = useRouter();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsByName(router.query.name))
  }, [router.query.name])

  return (
    <div className="search">
      <div className="container">
        <div className="search__content breadcrum">
          <div className="search__content___inner">
            <div className="header">
              <ul className="header__list">
                <li className="header__list___item active">
                  Đang mở cửa
                </li>
                <li className="header__list___item">
                  Đang giảm giá
                </li>
                <li className="header__list___item">
                  FreeShip
                </li>
                <li className="header__list___item">
                  Đánh giá cao
                </li>
              </ul>
              <div className="header__sort">
                <select className="header__sort___item">
                  <option>124124</option>
                  <option>124124</option>
                  <option>124124</option>
                  <option>124124</option>
                </select>
                <select className="header__sort___item">
                  <option>124124</option>
                  <option>124124</option>
                  <option>124124</option>
                  <option>124124</option>
                </select>
              </div>
            </div>
            {
              !loadingSearch ? <>
                <div className="bd">
                  <Product size={100} isShowAll={false} />
                </div>
                <div className="pagination">
                  <ul className="pagination__main">
                    <li className="pagination__main___item arrow">
                      <i className="fa-solid fa-angle-left fa-size" />
                    </li>
                    <li className="pagination__main___item active">1</li>
                    <li className="pagination__main___item">2</li>
                    <li className="pagination__main___item">3</li>
                    <li className="pagination__main___item">4</li>
                    <li className="pagination__main___item">5</li>
                    <li className="pagination__main___item">6</li>
                    <li className="pagination__main___item">7</li>
                    <li className="pagination__main___item arrow">
                      <i className="fa-solid fa-angle-right fa-size" />
                    </li>
                  </ul>
                </div>
              </> : <div className="product" style={{ textAlign: "center" }}>
                <lord-icon
                  src="https://cdn.lordicon.com/xjovhxra.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#08a88a"
                  style={{ minHeight: "350px", width: '100px', height: '100px' }}
                />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
