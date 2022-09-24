import Head from "next/head";
import MenuSlider from "../../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../../common/Components/User/User";
import UserNotifyDetail from "../../../../common/Components/User/UserNotify/UserNotifyDetail/UserNotifyDetail";

export default function NotifyDetailIdx() {
  return (
    <>
      <Head>
        <title>Thông tin thông báo #1248215 </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserNotifyDetail />}
      </User>
    </>
  );
}
