import Router from "next/router";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";
import "../styles/myGlobals.css";
import "../styles/phoneGlobals.css";

import "../styles/Header.css";
import "../styles/Footer.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/blogs.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => {
    console.log("route is change");
  });
  Router.events.on("routeChangeComplete", () => {
    console.log("route is complete");
  });
  Router.events.on("routeChangeError", () => {
    console.log("error");
  });
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
