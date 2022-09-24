import Head from "next/head";
import MenuSlider from "../../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../../common/Components/User/User";
import UserSecuritySetting from "../../../../common/Components/User/UserSecurity/UserSecuritySetting/UserSecuritySetting";

export default function UserSecuritySettingIdx() {
  return (
    <>
      <Head>
        <title>Cài đặt bảo mật </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserSecuritySetting />}
      </User>
    </>
  );
}
