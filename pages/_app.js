import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";
import "../styles/myGlobals.css";
import "../styles/phoneGlobals.css";

import "../styles/Header.css";
import "../styles/Footer.css";
import "../styles/home.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
