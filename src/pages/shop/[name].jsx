import Head from "next/head";
import { useRouter } from "next/router";
import Shop from "../../common/Components/Shop/Shop";
import ShopAllProduct from "../../common/Components/Shop/ShopAllProduct/ShopAllProduct";
import ShopCategory from "../../common/Components/Shop/ShopCategory/ShopCategory";
import ShopInfo from "../../common/Components/Shop/ShopInfo/ShopInfo";

export default function ShopIdx() {
  const routerTab = useRouter();

  return (
    <>
      <Head>
        {routerTab.query.tow === "shop" ? (
          <title>Thông tin shop Đậu Nam PC </title>
        ) : routerTab.query.tow === "product" ? (
          <title>Sản phẩm Shop Đậu nam PC </title>
        ) : routerTab.query.tow === "category" ? (
          <title>Danh mục của Shop </title>
        ) : routerTab.query.tow === "info" ? (
          <></>
        ) : (
          ""
        )}
      </Head>
      <Shop>
        {routerTab.query.tow === "shop" ? (
          <ShopInfo />
        ) : routerTab.query.tow === "product" ? (
          <ShopAllProduct />
        ) : routerTab.query.tow === "category" ? (
          <ShopCategory />
        ) : routerTab.query.tow === "info" ? (
          <></>
        ) : (
          ""
        )}
      </Shop>
    </>
  );
}
