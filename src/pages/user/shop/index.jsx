import Head from "next/head";
import { useRouter } from "next/router";
import MenuSlider from "../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../common/Components/User/User";
import UserShop from "../../../common/Components/User/UserShop/UserShop";

export default function UserShopIdx() {
  return (
    <>
      <Head>
        <title>Thông tin shop của bạn </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserShop />}
      </User>
    </>
  );
}
