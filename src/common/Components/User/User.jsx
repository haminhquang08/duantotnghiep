import { useEffect } from "react";
import useWindowSize from "../../lib/WindowSize/WindowSize";
export default function User({ isActive, children }) {
  const sizeWindow = useWindowSize().width;
  useEffect(() => {
    if (sizeWindow) {
      if (sizeWindow < 654) {
        if (document.getElementById("userMenuLeftIdx")) {
          document.getElementById("userMenuLeftIdx").style.width = "100%";
        }
        if (document.getElementById("userMenuRightIdx")) {
          document.getElementById("userMenuRightIdx").style.width = "100%";
        }
      } else {
      }
    }
  }, [sizeWindow]);
  return (
    <div className="user">
      <div className="container">
        <div className="user__content breadcrum " >
          <div className="user__content___breadcrumb breadcrumb__content">
            <ul className="main">
              <li className="main__item">SuperFood</li>
              <li className="main__item">Tài khoản</li>
              <li className="main__item">Thông tin</li>
            </ul>
          </div>
          {sizeWindow > 654 ? (
            <div className="user__content___flex">
              <div
                className="user__content___flex____left"
              >
                {children[0]}
              </div>
              <div
                id="userMenuRightIdx"
                className="user__content___flex____right"
              >
                {children[1]}
              </div>
            </div>
          ) : (
            <>
              {isActive === 0 ? (
                <div className="user__content___flex">
                  <div
                    id="userMenuLeftIdx"
                    className="user__content___flex____left"
                  >
                    {children}
                  </div>
                </div>
              ) : (
                <div className="user__content___flex">
                  <div
                    id="userMenuRightIdx"
                    className="user__content___flex____right"
                  >
                    {children[1]}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
