import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApiLink } from "../../constants/ApiLink";
import { RouterLinkConfig } from "../../constants/RouterLink";
import { showDisplay } from "../../redux/features/showDisplay/showDisplaySlice";
import { showMenuMobileDisplay } from "../../redux/features/showDisplay/showMenuMobile";
import Banner from "../Banner/Banner";

import Login from "../Login/Login";
import MenuMobile from "../MenuMobile/MenuMobile";
import Search from "./Search/Search";

export default function Header() {
  /** isDisplay Show Form Login (Redux) **/
  const isDisplayLogin = useSelector((state) => state.showDisplaySlice.display);

  /** isDisplayShowMobile Show Menu Mobile (Redux) **/
  const isDisplayMenuMobile = useSelector(
    (state) => state.showMenuMobile.display
  );

  const [user] = useState(null);
  const dispatch = useDispatch();

  /*Get Scroll*/
  const [heightScroll, setHeightScroll] = useState();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setHeightScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heightScroll]);

  /**OnClick Show Menu Mobile **/
  const onShowMenuMobile = () => {
    dispatch(showMenuMobileDisplay());
  };

  /**OnClick Show Form Login **/
  const isShowLogin = () => {
    dispatch(showDisplay());
  };
  return (
    <>
      {
        <div
          className={
            isDisplayLogin
              ? "fixedLogin showFormOpacity"
              : "fixedLogin hideFormOpacity"
          }
        >
          <Login />
        </div>
      }
      {isDisplayMenuMobile ? <MenuMobile /> : ""}
      <div className="navbar">
        <div className="navbar__top">
          <div className="container">
            <ul className="topbar">
              <li className="topbar__item">
                <p className="topbar__item___text">
                  Tr??? th??nh ?????i t??c v???i Super Shipping
                </p>
                <i className="fa-solid fa-handshake fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">
                  Ti???t ki???p h??n v???i ???ng d???ng
                </p>
                <i className="fa-solid fa-mobile-screen fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">Ch??m s??c kh??ch h??ng</p>
                <i className="fa-solid fa-mug-hot fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">Kh??m ph??</p>
                <i className="fa-solid fa-basket-shopping fa-size" />
              </li>
              <li className="topbar__item">
                <p className="topbar__item___text">Tr??? gi??p</p>
                <i className="fa-solid fa-circle-question fa-size" />
              </li>
              <li className="topbar__item language">
                <picture>
                  <img
                    src="/images/vi_VN.png"
                    className="img-language"
                    alt=""
                  />
                </picture>
                <p className="topbar__item___text">Vi???t nam</p>
                <i className="fa-solid fa-caret-down fa-size fa-scale-1" />
                <ul className="list">
                  <li className="list__item">
                    <picture>
                      <img
                        src="/images/vi_VN.png"
                        className="img-language"
                        alt=""
                      />
                    </picture>
                    <p>Ti???ng vi???t</p>
                    <i className="fa-solid fa-check fa-size" />
                  </li>
                  <li className="list__item">
                    <picture>
                      <img
                        src="/images/en_US.png"
                        className="img-language"
                        alt=""
                      />
                    </picture>
                    <p>Ti???ng anh</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar__bottom">
          <div className="container">
            <div className="bottombar">
              <div className="bottombar__left">
                <Link href={RouterLinkConfig.index}>
                  {/** 
<a>
                    <div className="logo">
                      <picture>
                        <img src="/images/text-logo.png" alt="" />
                      </picture>
                    </div>
                  </a>
                  **/}
                  <a>
                    <span>
                      <b className="b-1">
                        SUPER
                      </b>
                      <b className="b-2">
                        FOODVN
                      </b>
                    </span>
                  </a>
                </Link>
                <ul className="menu">
                  <li className="menu__item address">
                    <p>????k L??k</p>
                    <i className="fa-solid fa-angle-down fa-size" />
                  </li>
                  <li className="menu__item">
                    <p>B??? s??u t???p</p>
                  </li>
                  <li className="menu__item">
                    <p>??n u???ng</p>
                  </li>
                  <li className="menu__item">
                    <p>Kh??m ph??</p>
                  </li>
                  <li className="menu__item">
                    <p>Tin t???c</p>
                  </li>
                  <li className="menu__item">
                    <p>Giao h??ng</p>
                  </li>
                  <li className="menu__item">
                    <p>Chi nh??nh</p>
                  </li>
                  <li className="menu__item">
                    <p>H?? tr???</p>
                  </li>
                  <li className="menu__item">
                    <p>B??o l???i</p>
                  </li>
                </ul>
                <div className="bottombar__left___group">

                  {/**  <Search />**/}
                </div>
              </div>

              <div className="bottombar__right">
                <div className="bottombar__right___userMobile">
                  {/*"menuFixedRootIdx"*/}
                  <div onClick={onShowMenuMobile} id="" className="menu">
                    <i className="fa-solid fa-bars fa-size" />
                  </div>
                </div>
                <div className="bottombar__right___user">
                  <Link href={RouterLinkConfig.cart}>
                    <a className="text user">
                      <div className="text cart">
                        <i className="fa-solid fa-basket-shopping fa-size" />
                        <p>Gi??? h??ng</p>
                        <div className="quality">
                          14
                        </div>
                      </div>
                    </a>
                  </Link>
                  <div className="text user">
                    {user ? (
                      <div className="owp-w1 login-active">
                        <i className="fa-size fa-solid fa-user" />
                        <div className="inner">
                          <span className="name">????u V??n Nam </span>
                          <div className="woi">
                            <li className="woi__item">S??? d?? : 0</li>
                          </div>
                        </div>
                        <ul className="info">
                          <li className="info__item">
                            <i className="fa-solid fa-info fa-size-1" />
                            <p>Th??ng tin t??i kho???n</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Qu???n l?? thanh to??n</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Qu???n l?? ?????a ch???</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Qu???n l?? th??ng tin</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>?????ng b???</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>N???p ti???n +</p>
                          </li>
                          <li className="info__item">
                            <i className="fa-solid fa-credit-card fa-size-1" />
                            <p>Qu???n l?? thanh to??n</p>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div onClick={() => isShowLogin(true)} className="owp-w1">
                        <i className="fa-size fa-solid fa-user" />
                        <span>T??i kho???n</span>
                      </div>
                    )}
                    {/* 
                   
                      */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
