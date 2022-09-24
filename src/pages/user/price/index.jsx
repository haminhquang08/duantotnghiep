import Head from "next/head";
import MenuSlider from "../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../common/Components/User/User";
import UserPrice from "../../../common/Components/User/UserPrice/UserPrice";

export default function UserPriceIdx() {
  return (
    <>
      <Head>
        <title>Thông tin số tiền </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserPrice />}
      </User>
    </>
  );
}
