import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideDisplay } from "../../../redux/features/showDisplay/showDisplaySlice";
import { sendCode } from "../../../redux/features/User/userSlice";

export default function LoginCode() {
  const dispatch = useDispatch();
  const [code, setCode] = useState({
    code1: "",
    code2: "",
    code3: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });
  const hideFromLogin = () => {
    dispatch(hideDisplay());
  };
  const [errorCode, setErrorCode] = useState({
    isCode: true,
    mess: null,
  });
  const onGetCode = (e) => {
    if (e.target.value.length <= 1) {
      setCode({
        ...code,
        [e.target.name]: e.target.value,
      });
    }
  };
  const isVaildation = () => {
    if (
      !code.code1 ||
      !code.code2 ||
      !code.code3 ||
      !code.code4 ||
      !code.code5 ||
      !code.code6
    ) {
      setErrorCode({
        isCode: false,
        mess: "Không được bỏ trống ",
      });
      return false;
    } else {
      setErrorCode({
        isCode: true,
        mess: "",
      });
      return true;
    }
  };
  const onCheckCode = (e) => {
    e.preventDefault();

    if (isVaildation()) {
      dispatch(sendCode({ code }));
    }
  };
  return (
    <div className="fixedLogin">
      <div className="fixedLogin__inner">
        <div className="prev">
          <i className="fa-size fa-solid fa-angle-left" />
        </div>
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
          <h4>Xác nhận số điện thoại</h4>
          <p>Xem mã được gửi qua số điện thoại của bạn có 6 chữ số</p>
        </div>
        <form onSubmit={onCheckCode} method="POST">
          <div className="inputCode">
            <ul className="inputLogin__code" style={{ overflowX: "scroll" }}>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code1}
                  type="text"
                  name="code1"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code2}
                  type="text"
                  name="code2"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code3}
                  type="text"
                  name="code3"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code4}
                  type="text"
                  name="code4"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code5}
                  type="text"
                  name="code5"
                  className="codew1"
                />
              </li>
              <li className="inputLogin__code___item">
                <input
                  onChange={onGetCode}
                  value={code.code6}
                  type="text"
                  name="code6"
                  className="codew1"
                />
              </li>
            </ul>
            {errorCode.isCode ? (
              ""
            ) : (
              <div
                className="error"
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem",
                  color: "#f70e0e",
                }}
              >
                <p>{errorCode.mess} </p>
              </div>
            )}
            <div className="btnLogin">
              <button href="#" className="sendCode">
                Gửi lại mã xác nhận{" "}
              </button>
              <a href="">
                <button type="submit">XÁC NHẬN</button>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
