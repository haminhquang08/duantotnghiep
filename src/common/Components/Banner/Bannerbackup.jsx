import { useEffect, useState } from "react";

export default function Bannerbackup() {
  const [widthBannerAll, setWidthBannerAll] = useState(0);
  const [btnSlider, setBtnSlider] = useState(false);
  const [widthBanner, setWidthBanner] = useState(0);
  const onSlider = (value, width) => {
    let count = widthBannerAll;
    let allItemBannerIdx = document.getElementsByClassName(
      "bannerItemIdxWebUser"
    );
    let widthItemBanner =
      document.getElementById("bannerSliderWebIdxUser").clientWidth / 3;
    let widthAllItemBanner = widthItemBanner * allItemBannerIdx.length;
    let spacing = widthAllItemBanner - 3 * widthItemBanner;

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
  return (
    <div className="bannerwp">
      <div className="bannerwp__inner">
        <div className="btnLeft btnSlider">
          <button
            onClick={() => onSlider("left", widthBannerAll)}
            id="sliderIdxWebLeft"
            type="button"
          >
            <i className="fa-solid fa-angle-left fa-size" />
          </button>
        </div>
        <div className="btnRight btnSlider">
          <button
            onClick={() => onSlider("right", widthBannerAll)}
            id="sliderIdxWebRight"
            type="button"
          >
            <i className="fa-solid fa-angle-right fa-size" />
          </button>
        </div>
        <ul id="bannerSliderWebIdxUser" className="bannerwp__inner___main">
          <li className="bannerwp__inner___main____item bannerItemIdxWebUser">
            <div className="image">
              <picture>
                <img
                  src="https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2880-1661156575?w=393&type=o"
                  alt=""
                />
              </picture>
            </div>
          </li>
          <li className="bannerwp__inner___main____item bannerItemIdxWebUser">
            <div className="image">
              <picture>
                <img
                  src="https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2880-1661156575?w=393&type=o"
                  alt=""
                />
              </picture>
            </div>
          </li>
          <li className="bannerwp__inner___main____item bannerItemIdxWebUser">
            <div className="image">
              <picture>
                <img
                  src="https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2880-1661156575?w=393&type=o"
                  alt=""
                />
              </picture>
            </div>
          </li>
          <li className="bannerwp__inner___main____item bannerItemIdxWebUser">
            <div className="image">
              <picture>
                <img
                  src="https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2880-1661156575?w=393&type=o"
                  alt=""
                />
              </picture>
            </div>
          </li>
          <li className="bannerwp__inner___main____item bannerItemIdxWebUser">
            <div className="image">
              <picture>
                <img
                  src="https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2880-1661156575?w=393&type=o"
                  alt=""
                />
              </picture>
            </div>
          </li>
          <li className="bannerwp__inner___main____item bannerItemIdxWebUser">
            <div className="image">
              <picture>
                <img
                  src="https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2880-1661156575?w=393&type=o"
                  alt=""
                />
              </picture>
            </div>
          </li>
          <li className="bannerwp__inner___main____item bannerItemIdxWebUser">
            <div className="image">
              <picture>
                <img
                  src="https://tea-3.lozi.vn/v1/images/resized/banner-mobile-2880-1661156575?w=393&type=o"
                  alt=""
                />
              </picture>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
