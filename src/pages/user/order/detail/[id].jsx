import Head from "next/head";
import MenuSlider from "../../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../../common/Components/User/User";
import UserOrderDetail from "../../../../common/Components/User/UserOrder/UserOrderDetail/UserOrderDetail";

export default function OrderDetailIdx() {
  return (
    <>
      <Head>
        <title>Thông tin đơn hàng #2417515</title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserOrderDetail />}
      </User>
    </>
  );
}
