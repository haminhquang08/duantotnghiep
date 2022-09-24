import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../../redux/features/auth/authThunk";
import { hideDisplay } from "../../../redux/features/showDisplay/showDisplaySlice";
import { confirmRegUser } from "../../../redux/features/User/userSlice";

export default function LoginConfirmInfo() {
  const phoneLogin = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const router = useRouter();
  const [validation, setValidation] = useState({
    isEmpty: true,
    isLength: true,
    isPassword: true,
    mess: "",
  });
  const [userConfirm, setConfirmUser] = useState({
    fullName: "",
    userName: "",
    passWord: "",
    passWord1: "",
    phone: phoneLogin.user.phone,
  });
  const [formError, setFormError] = useState({
    fullName: "",
    userName: "",
    passWord: "",
    passWord1: "",
    isError: true,
  });
  const validate = (values) => {
    let error = {
      fullName: "",
      userName: "",
      passWord: "",
      passWord1: "",
      isError: false,
    };

    if (!userConfirm.fullName) {
      error = {
        ...error,
        fullName: "Họ và tên không được bỏ trống ",
        isError: true,
      };
    } else if (userConfirm.fullName.length < 5) {
      error = {
        ...error,
        fullName: "Tên phải Lớn hơn 5 kí tự ",
        isError: true,
      };
    } else if (userConfirm.fullName.length > 20) {
      error = {
        ...error,
        fullName: "Tên không quá dài 20 kí tự ",
        isError: true,
      };
    }
    if (!userConfirm.userName) {
      error = {
        ...error,
        userName: "Tên tài khoản không được bỏ trống ",
        isError: true,
      };
    } else if (userConfirm.userName.length < 5) {
      error = {
        ...error,
        userName: "Tên tài khoản phải lớn hơn 5 kí tự  ",
        isError: true,
      };
    } else if (userConfirm.userName.length > 15) {
      error = {
        ...error,
        userName: "Tên tài khoản không được dài quá 15 kí tự ",
        isError: true,
      };
    } else if (/\s/g.test(userConfirm.userName)) {
      error = {
        ...error,
        userName: "Tên tài khoản không được có khoảng trắng ",
        isError: true,
      };
    }
    if (!userConfirm.passWord1) {
      error = {
        ...error,
        passWord1: "Mật khẩu không được bỏ trống ",
        isError: true,
      };
    } else if (userConfirm.passWord1.length > 30) {
      error = {
        ...error,
        passWord1: "Mật khẩu không được dài quá 30 kí tự ",
        isError: true,
      };
    } else if (userConfirm.passWord !== userConfirm.passWord1) {
      error = {
        ...error,
        passWord1: "Mật khẩu không trùng nhau ",
        isError: true,
      };
    }

    if (!userConfirm.passWord) {
      error = {
        ...error,
        passWord: "Mật khẩu không được bỏ trống ",
        isError: true,
      };
    } else if (userConfirm.passWord.length > 30) {
      error = {
        ...error,
        passWord: "Mật khẩu không được quá 30 kí tự ",
        isError: true,
      };
    } else if (userConfirm.passWord !== userConfirm.passWord1) {
      error = {
        ...error,
        passWord: "Mật khẩu không trùng nhau  ",
        isError: true,
      };
    }
    setFormError(error);
    return error;
  };

  useEffect(() => { }, [formError, userConfirm]);

  /** Set data userConfirm**/
  const onIsValidation = (e) => {
    setConfirmUser({
      ...userConfirm,
      [e.target.name]: e.target.value,
    });
  };
  const hideFromLogin = () => {
    dispatch(hideDisplay());
  };
  const onConfirmRegister = (e) => {
    e.preventDefault();
    if (!validate(userConfirm).isError) {
      dispatch(register({ userData: userConfirm }));
      dispatch(hideDisplay());
      router.push("/");
    }
  };
  return (
    <div className="fixedLogin" style={{}}>
      <div className="fixedLogin__inner">
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
          <h4>XÁC NHẬN THÔNG TIN</h4>
          <p>Điền các thông tin đầy đủ để sử dụng hệ thống</p>
        </div>
        <div className="inputLogin">
          <form onSubmit={onConfirmRegister} className="regUser" action="">
            <div className="regUser__item">
              <label htmlFor="user">Tên của bạn </label>
              <input
                onChange={onIsValidation}
                className={formError.fullName ? "error" : ""}
                type="text"
                name="fullName"
                id=""
              />
              {formError.fullName ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formError.fullName}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="regUser__item">
              <label htmlFor="user">Tên đăng nhập </label>
              <input
                onChange={onIsValidation}
                className={formError.userName ? "error" : ""}
                type="text"
                name="userName"
                id=""
              />
              {formError.userName ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formError.userName}{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="regUser__item">
              <label htmlFor="user">Mật khẩu </label>
              <input
                onChange={onIsValidation}
                className={formError.passWord1 ? "error" : ""}
                type="password"
                name="passWord1"
                id=""
              />
              {formError.passWord1 ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formError.passWord1}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="regUser__item">
              <label htmlFor="user">Xác nhận mật khẩu </label>
              <input
                onChange={onIsValidation}
                className={formError.passWord ? "error" : ""}
                type="password"
                name="passWord"
                id=""
              />
              {formError.passWord ? (
                <p
                  className="error"
                  style={{
                    marginTop: "5px",
                    fontSize: "0.9rem",
                    color: "#f70e0e",
                  }}
                >
                  {formError.passWord}{" "}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="btnLogin">
              <button type="reset" className="sendCode">
                Đặt lại
              </button>
              <a href="">
                <button type="submit">XÁC NHẬN</button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
