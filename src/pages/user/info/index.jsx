import Head from "next/head";
import MenuSlider from "../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../common/Components/User/User";
import UserInfo from "../../../common/Components/User/UserInfo/UserInfo";
export default function UserInfoIdx() {
  return (
    <>
      <Head>
        <title>Thông tin tài khoản </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserInfo />}
      </User>
    </>
  );
}
