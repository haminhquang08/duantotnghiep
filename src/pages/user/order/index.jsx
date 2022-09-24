import Head from "next/head";
import MenuSlider from "../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../common/Components/User/User";
import UserOrder from "../../../common/Components/User/UserOrder/UserOrder";

export default function UserOrderIdx() {
  return (
    <>
      <Head>
        <title>Danh sách đơn hàng </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserOrder />}
      </User>
    </>
  );
}
