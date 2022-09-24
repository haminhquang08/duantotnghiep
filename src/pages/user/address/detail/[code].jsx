import Head from "next/head";
import MenuSlider from "../../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../../common/Components/User/User";
import UserAddressDetail from "../../../../common/Components/User/UserAddress/UserAddressDetail/UserAddressDetail";

export default function UserAddressDetailIdx() {
  return (
    <>
      <Head>Thông tin địa chỉ #22222</Head>
      <User>
        {<MenuSlider />}
        {<UserAddressDetail />}
      </User>
    </>
  );
}
