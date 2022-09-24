import Link from "next/link";
import React from "react";
import { RouterLinkConfig } from "../../../constants/RouterLink";

export default function MenuSlider() {
  return (
    <div className="content">
      <ul className="content__main">
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Tài khoản </span>
          </div>
          <Link href={RouterLinkConfig.userInfo()}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-house-user fa-size" />
                <span>Thông tin tài khoản </span>
              </li>
            </a>
          </Link>
          <Link href={RouterLinkConfig.userShop()}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-shop fa-size" />
                <span>Thông tin Shop </span>
              </li>
            </a>
          </Link>
          <Link href={RouterLinkConfig.userPrice()}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-money-bill fa-size" />
                <span>Số dư </span>
              </li>
            </a>
          </Link>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Giao dịch </span>
          </div>
          <Link href={RouterLinkConfig.userOrder()}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-truck-fast fa-size" />
                <span>Đơn hàng </span>
              </li>
            </a>
          </Link>

          <li className="content__main___wp____item">
            <i className="fa-solid fa-bag-shopping fa-size" />
            <span> Đã mua </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-money-bills fa-size" />
            <span>Đã thanh toán </span>
          </li>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Địa chỉ và thanh toán  </span>
          </div>
          <Link href={RouterLinkConfig.userAddress()}>
            <li className="content__main___wp____item">
              <i className="fa-solid fa-location-dot fa-size" />
              <span>Địa chỉ thanh toán </span>
            </li>
          </Link>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Bảo mật </span>
          </div>
          <Link href={RouterLinkConfig.userSecurity()}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-shield fa-size" />
                <span>Thông tin bảo mật  </span>
              </li>
            </a>
          </Link>
          <Link href={RouterLinkConfig.userSecuritySetting()}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-file-shield fa-size" />
                <span>Cài đặt bảo mật </span>
              </li>
            </a>
          </Link>
        </div>
        <div className="content__main___wp">
          <div className="nameFx">
            <span>Thông báo </span>
          </div>
          <Link href={RouterLinkConfig.userNotify()}>
            <a>
              <li className="content__main___wp____item">
                <i className="fa-solid fa-envelope-open-text fa-size" />
                <span>Thông báo  </span>
              </li>
            </a>
          </Link>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
          <li className="content__main___wp____item">
            <i className="fa-solid fa-house-user fa-size" />
            <span>Thông tin tài khoản </span>
          </li>
        </div>
      </ul>
    </div>
  );
}
