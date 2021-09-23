import Router from "next/router";
import Spinner from "../components/Spinner";
import { useState, useEffect } from "react";
import { wrapper } from "../redux/store";
import "tailwindcss/tailwind.css";
import "../styles/custom.css";

const Sup = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  const loadingStart = () => {
    setLoading(true);
  };
  const loadingEnd = () => {
    setLoading(false);
  };

  useEffect(() => {
    Router.events.on("routeChangeStart", loadingStart);
    Router.events.on("routeChangeComplete", loadingEnd);
    Router.events.on("routeChangeError", loadingEnd);
    return () => {
      Router.events.off("routeChangeStart", loadingStart);
      Router.events.off("routeChangeComplete", loadingEnd);
      Router.events.off("routeChangeError", loadingEnd);
    };
  });

  return <>{loading ? <Spinner /> : <Component {...pageProps} />}</>;
};

export default wrapper.withRedux(Sup);
