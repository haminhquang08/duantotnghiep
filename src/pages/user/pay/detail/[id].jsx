import Head from "next/head";
import MenuSlider from "../../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../../common/Components/User/User";
import UserPayDetail from "../../../../common/Components/User/UserPay/UserPayDetail/UserPayDetail";

export default function UserPayDetailIdx() {
  return (
    <>
      <Head>
        <title>Chi tiết thanh toán </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserPayDetail />}
      </User>
    </>
  );
}
