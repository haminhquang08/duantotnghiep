import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RouterLinkConfig } from "../../constants/RouterLink";

export default function Banner() {
  const [widthBannerAll, setWidthBannerAll] = useState(0);
  const [textSearch, setTextSearch] = useState(null)
  const [btnSlider, setBtnSlider] = useState(false);
  const [widthBanner, setWidthBanner] = useState(0);
  const router = useRouter()
  const onSlider = (value, width) => {
    let count = widthBannerAll;
    let allItemBannerIdx = document.getElementsByClassName(
      "bannerItemIdxWebUser"
    );
    let widthItemBanner =
      document.getElementById("bannerSliderWebIdxUser").clientWidth / 1;
    let widthAllItemBanner = widthItemBanner * allItemBannerIdx.length;
    let spacing = widthAllItemBanner - 1 * widthItemBanner;

    if (value === "right") {
      console.log("Count ", count);
      count += widthItemBanner;
      if (count > spacing) count = 0;
      document.getElementById(
        "bannerSliderWebIdxUser"
      ).style.transform = `translate3d(-${count}px,0px,0px)`;
      setWidthBannerAll(count);
      setWidthBanner(count);
    } else if (value === "left") {
      count -= widthItemBanner;
      if (count >= 0) {
        document.getElementById(
          "bannerSliderWebIdxUser"
        ).style.transform = `translate3d(-${count}px,0px,0px)`;
      } else {
        document.getElementById(
          "bannerSliderWebIdxUser"
        ).style.transform = `translate3d(-${widthAllItemBanner - widthItemBanner
        }px,0px,0px)`;
        count = widthAllItemBanner - widthItemBanner;
      }
      setWidthBannerAll(count);
      setWidthBanner(count);
    }
  };
  useEffect(() => {
    // let count = widthBannerAll;
    // setTimeout(() => {
    //   onSlider("right", widthBannerAll);
    // }, 3500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthBannerAll]);
  const onSearch = (e) => {
    e.preventDefault();
    router.push(RouterLinkConfig.search(textSearch))
  }
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="container">
          <div className="banner__inner___title">
            <h4>
              TÌM VÀ ĐẶT MÓN
            </h4>
            <h4>
              TÍCH ĐIỂM GIẢM GIÁ
            </h4>
          </div>
          <form onSubmit={onSearch}>
            <div className="wrapper">
              <div className="wrapper__search">
                <span className="iconSearch">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>


                <input
                  type='text'
                  onChange={(e) => setTextSearch(e.target.value)}
                  placeholder="Tìm đồ ăn vặt buối tối - trà sữa - đồ ăn đêm ngay bây giờ nào "
                />
                <ul style={{ display: "none" }} className="wrapper__search___listSearch">
                  <h4>Kết quả tìm kiếm </h4>
                  <li className="itemSearch">
                    <i class="fa-regular fa-hand-point-right"></i>124124124124124
                  </li>
                  <li className="itemSearch">
                    <i class="fa-regular fa-hand-point-right"></i>124124124124124
                  </li>
                  <li className="itemSearch">
                    <i class="fa-regular fa-hand-point-right"></i>124124124124124
                  </li>
                  <li className="itemSearch">
                    <i class="fa-regular fa-hand-point-right"></i>124124124124124
                  </li>
                  <li className="itemSearch">
                    <i class="fa-regular fa-hand-point-right"></i>124124124124124
                  </li>
                  <li className="itemSearch">
                    <i class="fa-regular fa-hand-point-right"></i>124124124124124
                  </li>
                  <li className="itemSearch">
                    <i class="fa-regular fa-hand-point-right"></i>124124124124124
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
