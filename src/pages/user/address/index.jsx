import Head from "next/head";
import MenuSlider from "../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../common/Components/User/User";
import UserAddress from "../../../common/Components/User/UserAddress/UserAddress";

export default function UserAddressIdx() {
  return (
    <>
      <Head>
        <title>Địa chỉ của bạn </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserAddress />}
      </User>
    </>
  );
}
