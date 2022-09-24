import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { RouterLinkConfig } from "../../../constants/RouterLink";

export default function ShopHeader() {
  const router = useRouter();
  return (
    <>
      <div className="shopIf__flex">
        <div className="shopIf__flex___logo">
          <div className="logo">
            <picture>
              <img src="/images/avatar-cute-anime.jpg" alt="" />
            </picture>
          </div>
          <div className="nameWp">
            <h4 className="nameWp__hw">Lẩu thái nhà làm</h4>
            <div className="ticker">
              <span className="ticker__sc">
                Đang tin cậy
                <i className="fa-solid fa-square-check" />
              </span>
            </div>
            <div className="star">
              <span>
                <i className="fa-solid fa-star fa-size" />
                4.8/5
              </span>
            </div>
          </div>
        </div>
        <div className="shopIf__flex___wp">
          <button className="follow">
            <i className="fa-solid fa-user-plus" /> Theo dõi
          </button>
        </div>
      </div>
      <div className="shopIf__menu">
        <div className="wp">
          <ul className="menu">
            <Link href={RouterLinkConfig.shopIndex("dau-nam-pc")}>
              <a>
                <li
                  className={
                    router.query.tow === "shop"
                      ? " menu__item active"
                      : "menu__item"
                  }
                >
                  Cửa hàng
                </li>
              </a>
            </Link>
            <Link href={RouterLinkConfig.shopAllProduct("dau-nam-pc")}>
              <a>
                <li
                  className={
                    router.query.tow === "product"
                      ? " menu__item active"
                      : "menu__item"
                  }
                >
                  Tất cả sản phẩm
                </li>
              </a>
            </Link>
            <Link href={RouterLinkConfig.shopCategory("dau-nam-pc")}>
              <a>
                <li
                  className={
                    router.query.tow === "category"
                      ? " menu__item active"
                      : "menu__item"
                  }
                >
                  Danh mục
                </li>
              </a>
            </Link>
            <Link href={RouterLinkConfig.shopInfo("dau-nam-pc")}>
              <a>
                <li
                  className={
                    router.query.tow === "info"
                      ? " menu__item active"
                      : "menu__item"
                  }
                >
                  Thông tin cửa hàng
                </li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="ipnSearch">
          <i className="fa-solid fa-magnifying-glass fa-size" />
          <input
            type="text"
            name=""
            placeholder="Tìm sản phẩm tại cửa hàng này "
            id=""
          />
        </div>
      </div>
    </>
  );
}
