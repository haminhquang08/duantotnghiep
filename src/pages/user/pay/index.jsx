import Head from "next/head";
import MenuSlider from "../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../common/Components/User/User";
import UserPay from "../../../common/Components/User/UserPay/UserPay";

export default function UserPayIdx() {
  return (
    <>
      <Head>
        <title>Thanh toán </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserPay />}
      </User>
    </>
  );
}
