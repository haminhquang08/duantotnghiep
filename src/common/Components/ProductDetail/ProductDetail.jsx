import { useState, useEffect } from "react";
import ProductDetailContent from "./ProductDetailContent/ProductDetailContent";
import ProductDetailComment from "./ProductDetailComment/ProductDetailComment";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByCode,
  getProductByName,
} from "../../redux/features/product/productThunks";
import { selectNotifications } from "../../redux/features/notification/notificationSelects";
import NotificationRoot from "../Notification/NotificationRoot";
import BreadCrumb from "../Breadcrumb/BreadCrumb";
import {
  selectProductDetail,
  selectProductLoading,
} from "../../redux/features/product/productSelects";
import ProductDetailRoot from "./ProductDetailRoot/ProductDetailRoot";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { RouterLinkConfig } from "../../constants/RouterLink";
import BackgroundLoadingFixed from "../BackgroundLoadingFixed/BackgroundLoadingFixed";
import { setProduct } from "../../redux/features/product/productSlice";
export default function ProductDetail() {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataProductDetail = useSelector(selectProductDetail);
  const dataNotification = useSelector(selectNotifications);
  const [maxQuality, setMaxQuality] = useState();

  //** Set url top bar data BreadCrumb
  const [dataBreadcrumb] = useState([
    { name: "index", link: "/" },
    { name: "Sản phẩm ", link: "/" },
    { name: `${router.query.name}`, link: `/product/${router.query.name}` },
  ]);
  useEffect(() => {
    //dispatch(getProductByName(router.query.name, null))
    const result = router.query.name.split(".", 2);
    if (result[1]) {
      dispatch(getProductByCode(Number(result[1])));
    }
  }, [router.query.name]);

  return (
    <>
      <NotificationRoot data={dataNotification} />
      <div className="detail">
        <div className="container">
          <div className="detail__content breadcrumb">
            <div className="detail__content___breadcrumb breadcrumb__content">
              <BreadCrumb data={dataBreadcrumb} />
            </div>
            <div
              className={`detail__content___product ${
                dataProductDetail ? "" : "productDetailLoading"
              }`}
            >
              {<ProductDetailRoot />}
            </div>
            <div className="detail__content___wop">
              <ProductDetailContent />
            </div>
            <div className="detail__content___comment">
              <div className="title">
                <h4>
                  <i className="fa-solid fa-comments fa-size" /> Đánh giá từ
                  khách hàng
                </h4>
              </div>
              <div className="evaluate">
                <ProductDetailComment
                  codeProduct={
                    dataProductDetail &&
                    dataProductDetail[0] &&
                    dataProductDetail[0].codeProduct
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productAbout">
        <div className="container">
          <div className="productAbout__opw">
            <div className="title">
              <h4>Thức ăn đi kèm</h4>
            </div>
          </div>
          <div className="productAbout__product">
            <div className="productAbout__product___overScroll">
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <picture>
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </picture>
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
              <li className="product__wp___item">
                <div className="point">
                  <span>9.4</span>
                </div>
                <div className="image">
                  <img
                    src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <p>Set cơm việt buổi trưa</p>
                </div>
                <div className="price">
                  <span className="t1 text">300.000đ</span>
                  <span className="t2 text">120.000đ</span>
                </div>
                <div className="sellable">
                  <h4>Đã bán :</h4>
                  <b>465K</b>
                </div>
                <div className="description">
                  <div className="lw">
                    <img
                      src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                      alt=""
                    />
                  </div>
                  <div className="addressLength">
                    <i className="fa-size fa-solid fa-location-dot" />
                    <h4>4.2km</h4>
                  </div>
                </div>
                <div className="btn">
                  <button type="button">
                    <i className="fa-solid fa-basket-shopping fa-size" />
                    Chọn mua
                  </button>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className="productAbout">
          <div className="container">
            <div className="productAbout__opw">
              <div className="title">
                <h4>Có thể bạn yêu thích</h4>
              </div>
            </div>
            <div className="productAbout__product">
              <div className="productAbout__product___overScroll">
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
                <li className="product__wp___item">
                  <div className="point">
                    <span>9.4</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://image.cooky.vn/posproduct/g0/17280/s400x400/5048d46e-2b7e-430d-a750-6c99929f76cd.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <p>Set cơm việt buổi trưa</p>
                  </div>
                  <div className="price">
                    <span className="t1 text">300.000đ</span>
                    <span className="t2 text">120.000đ</span>
                  </div>
                  <div className="sellable">
                    <h4>Đã bán :</h4>
                    <b>465K</b>
                  </div>
                  <div className="description">
                    <div className="lw">
                      <img
                        src="https://afamilycdn.com/150157425591193600/2021/10/5/frame-11-16334083966771950318703.png"
                        alt=""
                      />
                    </div>
                    <div className="addressLength">
                      <i className="fa-size fa-solid fa-location-dot" />
                      <h4>4.2km</h4>
                    </div>
                  </div>
                  <div className="btn">
                    <button type="button">
                      <i className="fa-solid fa-basket-shopping fa-size" />
                      Chọn mua
                    </button>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
