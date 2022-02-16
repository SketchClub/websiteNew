import Router from "next/router";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";
import "../styles/myGlobals.css";
import "../styles/phoneGlobals.css";

import "../styles/Header.css";
import "../styles/Footer.css";
import "../styles/home.css";
import "../styles/about.css";
import "../styles/blogs.css";
import "../styles/contact.css";
import "../styles/events.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Error from "../components/Error";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  Router.events.on("routeChangeStart", () => {
    // console.log("route is change");
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    // console.log("route is complete");
    setLoading(false);
  });
  Router.events.on("routeChangeError", () => {
    // console.log("error");
    setLoading(false);
    setError(true);
  });
  if (loading) {
    return (
      <>
        <Header />
        <Loading />
        <Footer />
      </>
    );
  }
  if (error) {
    return (
      <>
        <Header />
        <Error />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
