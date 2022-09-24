import { useState } from "react";
import { useDispatch } from "react-redux";
import { ConfirmWindow } from "../../../../lib/Confirm/ConfirmWIndow";
import { updateUserEmailByCode, updateUserEmailPhoneByCode } from "../../../../redux/features/User/userThunks";

export default function UserInfoWo() {
  const [active, setActive] = useState({
    email: true,
    phone: true,
  });
  const [isConfirm, setIsConfirm] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const onChangeUpdate = (e) => {
    setDataUpdate({
      ...dataUpdate,
      [e.target.name]: e.target.value,
    });
  };
  const onUpdate = (value) => {
    if (!active.email && value === "email") {
      if (ConfirmWindow("Xác nhận đổi thư điện tử của bạn ")) {
        setActive({
          ...active,
          email: true,
        });
        // ** Test code user
        const code = null;
        dispatch(updateUserEmailByCode(code, dataUpdate.email));
      } else {
        setActive({
          ...active,
          email: true,
        });
      }
    } else if (!active.phone && value === "phone") {
      if (ConfirmWindow("Xác nhận đổi số điện thoại của bạn ")) {
        console.log("DA DOI");
        setActive({
          ...active,
          phone: true,
        });
        dispatch(updateUserEmailPhoneByCode(dataUpdate.phone, null));
      } else {
        setActive({
          ...active,
          phone: true,
        });
      }
    } else {
      if (value === "email") {
        setActive({
          ...active,
          email: false,
        });
      } else if (value === "phone") {
        setActive({
          ...active,
          phone: false,
        });
      } else {
      }
    }
  };
  return (
    <ul className="infoUser inline">
      <div className="bow">
        <span className="textFxBow">Số điện thoại / Thư điện tử</span>
        <li className="infoUser__item">
          <label htmlFor="">
            <i className="fa-solid fa-square-envelope fa-size" />
            Địa chỉ thư điện tử
          </label>
          <div className="ipn">
            <input
              type="text"
              onChange={onChangeUpdate}
              name="email"
              disabled={active.email ? true : false}
              value={dataUpdate.email}
            />
            <button onClick={() => onUpdate("email")} type="button">
              {active.email ? "Thay đổi " : " Xác nhận "}
            </button>
          </div>
        </li>
        <li className="infoUser__item">
          <label htmlFor="">
            <i className="fa-solid fa-phone fa-size" /> Số điện thoại
          </label>
          <div className="ipn">
            <input
              disabled={active.phone ? true : false}
              type="text"
              onChange={onChangeUpdate}
              name="phone"
              value={dataUpdate.phone}
            />
            <button onClick={() => onUpdate("phone")} type="button">
              {active.phone ? "Thay đổi " : " Xác nhận "}
            </button>
          </div>
        </li>
      </div>
      <div className="bow">
        <span className="textFxBow">Bảo mật / Bảo mật cấp 2</span>
        <li className="infoUser__item">
          <label htmlFor="">
            <i className="fa-solid fa-lock fa-size" />
            Mật khẩu cấp 1
          </label>
          <div className="ipn">
            <input type="password" defaultValue="##########" disabled="" />
            <button type="button">Thiết lập</button>
          </div>
        </li>
        <li className="infoUser__item">
          <label htmlFor="">
            <i className="fa-solid fa-lock fa-size" />
            Mật khẩu cấp 2
          </label>
          <div className="ipn">
            <input type="password" defaultValue="##########" disabled="" />
            <button type="button">Thiết lập</button>
          </div>
        </li>
      </div>
      <div className="bow">
        <span className="textFxBow">Liên kết mạng xã hội </span>
        <li className="infoUser__item">
          <div className="ipn mxh">
            <h4 className="lkmxh face">
              <i className="fa-brands fa-facebook fa-size" />
              Facebook
            </h4>
            <button type="button">Cập nhât</button>
          </div>
        </li>
        <li className="infoUser__item">
          <div className="ipn mxh">
            <h4 className="lkmxh zalo">
              <i className="fa-solid fa-comment fa-size" />
              Zalo
            </h4>
            <button type="button">Cập nhât</button>
          </div>
        </li>
      </div>
    </ul>
  );
}
