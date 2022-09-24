import Header from "../common/Components/Header/Header";
import Footer from "../common/Components/Footer/Footer";
import "../../styles/Loader.io.css";
import "../../styles/main.scss"
import { store, wrapper } from "../common/redux/store/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Banner from "../common/Components/Banner/Banner";
import { pageShowBanner } from "../common/constants/Pages";
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  /** Check router pathname show Banner **/
  const isCheckShowBanner = () => {
    let result = null;
    for (let i = 0; i < pageShowBanner.length; i++) {
      if (pageShowBanner[i] === router.pathname) {
        result = true;
        break;
      }
      else {
        result = false;
      }
    }
    return result;
  }
  return (
    <Provider store={store}>
      <div id="body" className="wrapper">
        <div className="desktop supership">
          {/* Check Router Checkout -> disable Header and Footer */}
          {router.pathname === "/checkout" ? (
            <Component {...pageProps} />
          ) : (
            <>
              <Header />
              {
                isCheckShowBanner() ? <Banner /> : ''
              }
              <Component {...pageProps} />
              <Footer />
            </>
          )}
        </div>
      </div>
    </Provider>

  );
};
export default wrapper.withRedux(MyApp);
