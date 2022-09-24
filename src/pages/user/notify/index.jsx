import Head from "next/head";
import MenuSlider from "../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../common/Components/User/User";
import UserNotify from "../../../common/Components/User/UserNotify/UserNotify";

export default function Notify() {
  return (
    <>
      <Head>
        <title>Thông báo tài khoản </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserNotify />}
      </User>
    </>
  );
}
