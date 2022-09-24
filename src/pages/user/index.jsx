import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MenuSlider from "../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../common/Components/User/User";
import useWindowSize from "../../common/lib/WindowSize/WindowSize";

export default function UserIdx() {
  let router = useRouter();
  const sizeWindow = useWindowSize().width;
  useEffect(() => {
    if (sizeWindow) {
      if (sizeWindow < 654) {
        router.push("/user");
        // document.getElementById("userMenuLeftIdx").style.width = "100%";
      } else {
        router.push("/user/info");
      }
    }
  }, [sizeWindow]);

  return (
    <>
      <Head>
        <title>Danh sách chọn </title>
      </Head>
      <User isActive={0}>{<MenuSlider />}</User>
    </>
  );
}
