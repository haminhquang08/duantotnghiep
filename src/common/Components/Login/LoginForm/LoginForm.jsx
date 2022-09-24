import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { telephoneCheck } from "../../../lib/isPhone";

import { hideDisplay } from "../../../redux/features/showDisplay/showDisplaySlice";
import { loginUser } from "../../../redux/features/User/userSlice";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState({
    isPhone: true,
    isSendCode: false,
    isUser: true,
    mess: null,
  });
  const dispatch = useDispatch();

  const isCheckPhoneUser = (phone) => {
    let mess = "";
    if (phone.length === 0) {
      mess = "Vui lòng nhập số điện thoại của bạn ";
      setIsLogin({
        ...isLogin,
        isPhone: false,
        mess,
      });
      return false;
    } else if (phone.length > 12) {
      let mess = "Số điện thoại không được quá 12 chữ số  ";
      setIsLogin({
        ...isLogin,
        isPhone: false,
        mess,
      });
      return false;
    } else if (!telephoneCheck(phone)) {
      mess = "Số điện thoại không đúng định dạng ";
      setIsLogin({
        ...isLogin,
        isPhone: false,
        mess,
      });
      return false;
    } else if (phone === "0949178082") {
      mess = "Số điện thoại đã được đăng kí ";

      setIsLogin({
        ...isLogin,
        isPhone: false,
        mess,
      });
      return false;
    } else {
      setIsLogin({
        ...isLogin,
        isPhone: true,
        mess: null,
        isSendCode: true,
      });
      return true;
    }
  };

  const onRegPhone = (e) => {
    e.preventDefault();
    if (isCheckPhoneUser(e.target.phone.value)) {
      dispatch(loginUser({ phone: e.target.phone.value }));
    }
  };

  const hideFromLogin = () => {
    dispatch(hideDisplay());
  };
  return (
    <div className="fixedLogin__inner">
      <form onSubmit={onRegPhone} action="">
        <div onClick={hideFromLogin} className="close">
          <i className="fa-solid fa-xmark fa-size" />
        </div>
        <div className="logo">
          <picture>
            <img
              src="http://static.ybox.vn/2022/5/5/1652409811891-cropped-Logo_genex_convertcircle.png"
              alt=""
            />
          </picture>
        </div>
        <div className="content">
          <h4>Chào mừng bạn đến với Super Ship</h4>
          <p>Nhập số điện thoại để đăng kí tài khoản</p>
        </div>
        <div className="inputLogin">
          <div className="reg">
            <span className="w">
              <picture>
                <img
                  src="https://tea-3.lozi.vn/v1/statics/resized/country-flag-vn-1570251233"
                  alt=""
                />
              </picture>
              +84
            </span>
            <div className="input">
              <input
                type="number"
                className={isLogin.isPhone ? "" : "errorPhone"}
                placeholder="Nhập số điện thoại của bạn "
                name="phone"
                id=""
              />
              {isLogin.phone ? (
                <></>
              ) : (
                <p className="error"> {isLogin.mess} </p>
              )}
            </div>
          </div>

          <div className="btnLogin">
            <button type="submit">
              {isLoading ? (
                <div className="loadingio-spinner-spinner-bbeydwj1ls">
                  <div className="ldio-m09wsst1j2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : (
                <>
                  {" "}
                  <i className="fa-solid fa-right-to-bracket" />
                  ĐĂNG NHẬP{" "}
                </>
              )}
            </button>
          </div>
        </div>
        <div className="twLogin">
          <div className="unline" />
          <h4 className="tw">Hoặc</h4>
        </div>
        <div className="orLogin">
          <button type="button" className="loginFacebook">
            <i className="fa-brands fa-facebook" />
            ĐĂNG NHẬP BẰNG FACEBOOK
          </button>
          <button type="button" className="loginGoogle">
            <i className="fa-brands fa-google" />
            ĐĂNG NHẬP BẰNG GOOGLE
          </button>
        </div>
      </form>
    </div>
  );
}
