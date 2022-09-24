import Head from "next/head";
import MenuSlider from "../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../common/Components/User/User";
import UserSecurity from "../../../common/Components/User/UserSecurity/UserSecurity";

export default function UserSecurityIdx() {
  return (
    <>
      <Head>
        <title>Tình trạng bảo mật </title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserSecurity />}
      </User>
    </>
  );
}
